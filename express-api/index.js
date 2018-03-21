var express = require('express');
var app = express();

const os = require("os");
const PORT = process.env.PORT|| 80;

app.get('/', function (req, res) {
  res.send(`Hello Express World! from ${os.hostname()}`);
});

app.listen(PORT, function () {
  console.log(`express-api running on ${PORT} at ${os.hostname()}!`);
});
