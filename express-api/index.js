var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Express World!');
});

app.listen(3000, function () {
  console.log('express-api running on port 3000!');
});
