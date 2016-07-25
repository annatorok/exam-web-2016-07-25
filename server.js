'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var decrypt = require('./decrypt');

app.use(bodyParser.json());
app.use(express.static('client'));


app.post('/decode', urlencodedParser, function(req, res) {
  decrypt.shiftMessage(req.body.text, req.body.shift, function (err, result) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3000);
