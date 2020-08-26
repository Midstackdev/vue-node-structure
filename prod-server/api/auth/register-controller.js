'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;

var _user = require('../../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register(req, res) {
  var user = new _user2.default(req.body);

  user.save().then(function (user) {
    return res.status(200).json({ success: true, data: user });
  }).catch(function (error) {
    if (error.code === 11000) {
      return res.status(403).json({ errors: 'Email is already taken.' });
    }
    console.log(error);
    return res.status(400).json({ success: false, errors: error });
  });
}