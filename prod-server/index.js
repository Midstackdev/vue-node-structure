'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = _dotenv2.default.config();

var app = (0, _express2.default)();
var port = process.env.PORT;

(0, _routes.registerRoutes)(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening at http://localhost:' + port);
});