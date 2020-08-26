'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.logout = logout;
function index(req, res) {
    return res.status(200).json({ message: 'Hello User' });
}

function logout(req, res) {
    return res.status(200).json({ message: 'Hello User' });
}