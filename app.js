var express = require('express');
var app = express();

var current = 'test';

app.get('/set/:visitId', function (req, res) {
  current = req.params.visitId
  res.send(current);
});

app.get('/get', function (req, res) {
  res.send(current);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
