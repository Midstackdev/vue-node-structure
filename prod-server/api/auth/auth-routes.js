'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _authController = require('./auth-controller');

var controller = _interopRequireWildcard(_authController);

var _registerController = require('./register-controller');

var _registerController2 = _interopRequireDefault(_registerController);

var _loginController = require('./login-controller');

var _loginController2 = _interopRequireDefault(_loginController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/auth', controller.index);

router.post('/register', _registerController2.default);

router.post('/login', _loginController2.default);

router.post('/logout', controller.logout);

exports.default = router;