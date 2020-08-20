'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerRoutes = registerRoutes;

var _moduleRoutes = require('./api/module/module-routes');

var _moduleRoutes2 = _interopRequireDefault(_moduleRoutes);

var _authRoutes = require('./api/auth/auth-routes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
    app.use('/api', _moduleRoutes2.default);
    app.use('/api', _authRoutes2.default);
}