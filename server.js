var soap = require('soap');
var express = require('express');
var bodyParser = require('body-parser')

var myService = {
    // Student's WSDL need to be configured

    // StudentDetailsPortService: {
    //     StudentDetailsPortSoap11: {
    //         StudentDetails: function (args) {
    //             return {
    //                 name: args.name,
    //                 address: 'Delhi'
    //             };
    //         }
    //     }
    // },
    SamplePortService: {
        SamplePortSoap: {
            SampleOperation: function (args) {
                return {
                    name: args.name
                };
            }
        }
    }
};

var xml = require('fs').readFileSync('myWsdl.wsdl', 'utf8');
var app = express();
app.use(bodyParser.raw({ type: function () { return true; }, limit: '5mb' }));
app.listen(8001, function () {
    let server = soap.listen(app, '/soap-service', myService, xml, function () {
        console.log('server initialized');
    });
    server.log = function (type, data) {
        console.log('type', type);
        console.log('data', data);
    };
});

app.get('/rest-service', function (req, res) {
    res.send('Hello World from Rest API');
});