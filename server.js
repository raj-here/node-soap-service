var soap = require('soap');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var myService = {
    SamplePortService: {
        SamplePortSoap: {
            SampleOperation: function (args) {
                return {
                    name: 'Hello ' + args.name
                };
            }
        }
    }
};

var xml = require('fs').readFileSync('myWsdl.wsdl', 'utf8');
var app = express();
app.use(bodyParser.raw({ type: function () { return true; }, limit: '5mb' }));
app.use(cors());
app.listen(8001, function () {
    let server = soap.listen(app, '/soap-service', myService, xml, function () {
        console.log('server initialized');
    });
    server.log = function (type, data) {
        console.log('type', type);
        console.log('data', data);
    };
    server.authenticate = function (security, callback) {
        if (security) {
            security = parseSoapArgs(security);
            var created, nonce, password, user, token;
            token = security.UsernameToken,
                user = token.Username,
                password = token.Password,
                nonce = token.Nonce,
                created = token.Created;

            // userManager.findActiveUserByEmailOrUserName(username, (err, user) => {
            //     if (user && user._id) {
            //         callback(password === soap.passwordDigest(nonce, created, user.password));
            //     } else {
            //         callback(false);
            //     }
            // });

            callback(password === soap.passwordDigest(nonce, created, '1234567'));
        } else {
            callback(false);
        }
    };
});

app.get('/rest-service', function (req, res) {
    res.send('Hello World from Rest API');
});


soap.createClient('myWsdl.wsdl', function (err, client) {
    var options = {
        hasNonce: true,
        actor: 'actor',
        passwordType: 'PasswordDigest'
    };
    var wsSecurity = new soap.WSSecurity('username', '1234567', options);
    client.setSecurity(wsSecurity);
    client.SampleOperation({ name: 'Raj' }, function (err, result, rawResponse, soapHeader, rawRequest) {
        console.log('result', result);
    });
});

const parseSoapArgs = (args) => {
    const acceptValues = ['string', 'number', 'boolean'];
    Object.keys(args).map((key) => {
        let valueType = typeof args[key];
        if (args[key]) {
            if (args[key].$value || acceptValues.indexOf(valueType) > -1) {
                args[key] = (args[key].$value) || args[key];
            } else if (Array.isArray(args[key])) {
                args[key] = args[key].map(parseSoapArgs);
            } else if (Object.keys(args[key]).length === 1 && Object.keys(args[key])[0] === 'attributes') {
                args[key] = null;
            } else if (Object.keys(args[key]).length) {
                args[key] = parseSoapArgs(args[key]);
            }
        } else {
            args[key] = null;
        }
    });
    return args;
}