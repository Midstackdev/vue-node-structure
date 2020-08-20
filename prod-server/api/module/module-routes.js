'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/module', function (req, res) {
    res.send('post.module - create a module');
});
router.get('/module', function (req, res) {
    res.send('get.module - get all module');
});
router.get('/module/:id', function (req, res) {
    res.send('get.module - create module by id');
});
router.put('/module', function (req, res) {
    res.send('put.module - update a module');
});
router.delete('/module', function (req, res) {
    res.send('delete.module - delete a module');
});

exports.default = router;