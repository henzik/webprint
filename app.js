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

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);
});
