# node-soap-service

[![N|Solid](https://lh5.googleusercontent.com/p/AF1QipPIHs4BD0tPgBytjkVyKuSm886VmVsunNhLEaBq=w203-h203-k-no)](https://www.facebook.com/world.raj95)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Full stack developer, hands on experience in

  - #JAVA
  - #JAVA-SCRIPT
  - #NODE
  - #ANGULAR
  - #ANGULARJS
  - #REACT

# About Node-Soap-Service!

  - This is Sample Web Service, which consumes both REST and SOAP API


You can also:
  - Gathered Knowledge of WSDL files in details
  - How WSDL is mapped with services in node

> The goal of this sample project to create 
> a web server who consume both Rest and 
> SOAP services at a time in a project in
> Node over Expree server, You can use 
> either http over Express, It depends up to
> you.
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

## Tech

### What is SOAP?


> SOAP stands for Simple Object Access Protocol. It’s basically the only thing that existed before REST. It’s an XML based API…before going any further, know that REST is much, MUCH better.

### Set Up

Dillinger requires [Node.js](https://nodejs.org/)

Install the dependencies and devDependencies and start the server.

```sh
$ cd node-soap-service
$ npm install
$ npm start
```
Verify the deployment by navigating to your server address in your preferred browser.

#### Test Rest Service
```sh
http://localhost:8001/rest-service
```

#### Test Soap Service

```sh
http://localhost:8001/soap-service
```


![](https://i.ibb.co/VtcSBs8/Capture.png)


#### Sample Request
##### Request Header
Content-Type: text/xml 

##### Request Type Method: POST

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="https://www.facebook.com/world.raj95">
    <soap:Body>
        <SampleRequest xmlns="https://www.facebook.com/world.raj95">
            <name>Raj Chauhan</name>
        </SampleRequest>
    </soap:Body>
</soap:Envelope>
```

#### Sample Response

```
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="https://www.facebook.com/world.raj95">
    <soap:Body>
        <SampleResponse xmlns="https://www.facebook.com/world.raj95">
            <name>Raj Chauhan</name>
        </SampleResponse>
    </soap:Body>
</soap:Envelope>
```
## License
[MIT](https://opensource.org/licenses/MIT/)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

Please contact [world.raj95@gmail.com](mailto:world.raj95@gmail.com) for any kind of approval or questions.

