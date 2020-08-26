'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateJWT = generateJWT;
exports.requireLogin = requireLogin;
exports.decodeToken = decodeToken;
exports.getUserEmail = getUserEmail;
exports.getUserId = getUserId;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateJWT(user) {
    var tokenData = { email: user.email, id: user._id };
    return _jsonwebtoken2.default.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}

function requireLogin(req, res, next) {
    var token = decodeToken(req);

    if (!token) {
        return res.status(401).json({ message: 'Unathorized action, please login.' });
    }

    next();
}

function decodeToken(req) {
    var token = req.headers.authorization.split(' ')[1] || req.headers['authorization'].split(' ')[1];

    if (!token) {
        return null;
    }

    try {
        return _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    } catch (e) {
        console.log(e);
        return null;
    }
}

function getUserEmail(req) {
    var token = decodeToken(req);

    if (!token) {
        return null;
    }
    return token.user.email;
}

function getUserId(req) {
    var token = decodeToken(req);

    if (!token) {
        return null;
    }
    return token.user._id;
}