'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = login;

var _user = require('../../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(req, res) {
    _user2.default.findOne({ 'email': req.body.email }).then(function (user) {
        if (!user) return res.status(404).json({ success: false, errors: { message: 'User email doesn\'t exist.' } });

        var passwordMatch = _user2.default.passwordMatches(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ success: false, errors: { message: 'Password is incorrect.' } });
        }

        res.status(200).json({ success: true, data: user });
    });
}