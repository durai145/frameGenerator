//var frame = require("./external/uss/frame.js");
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var config = require('./config/config.json');
var device = require('express-device')
Promise = require('bluebird'),
request = Promise.promisify(require('request'));
var app = express();
var AuthorizationFailure = require("./error/ValidationError");
var ms = require('ms');
var jwt = require('jsonwebtoken');

var MapperField = require("./mapper")

function createField(frameObj) {
    /**
     *  based on HtmlType create HtmlElements
     */

    if (!frameObj.HtmlType) {
        throw new Error("HtmlType is mandatory");
    }

    if (MapperField.mapper[frameObj.HtmlType]) {
        return MapperField.mapper[frameObj.HtmlType].createField(frameObj);
    } else {
        throw new Error("There is no mapper for HtmlType [" +  frameObj.HtmlType + "]");
    }

}
var frameObj = {
    "HtmlType": "LIST"
}
app.use(express.static(__dirname + '/public'));
var server = app.listen(config.port, function () {
	console.log('Listening on port %d', server.address().port);
});