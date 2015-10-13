var fs = require("fs");
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    })); 
    app.use(express.static(__dirname + '/public/'));


    //Calls
    app.listen(8080);

    console.log('Connected to Server at');
    console.log('->http://localhost:8080/');
    console.log('Press CTRL+C to stop server');




