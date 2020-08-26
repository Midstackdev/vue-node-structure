'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _stringUtil = require('../utilities/string-util');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT = process.env.BCRYPT_ROUNDS;

var userSchema = new _mongoose2.default.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.set('timestamps', true);

userSchema.virtual('fullname').get(function () {
    var firstname = _stringUtil.StringUtil.capitalize(undefined.firstname.toLowerCase());
    var lastname = _stringUtil.StringUtil.capitalize(undefined.lastname.toLowerCase());
    return firstname + ' ' + lastname;
});

userSchema.statics.passwordMatches = function (password, hash) {
    return _bcrypt2.default.compareSync(password, hash);
};

userSchema.pre('save', function (next) {
    this.email = this.email.toLowerCase();
    this.firstname = this.firstname.toLowerCase();
    this.lastname = this.lastname.toLowerCase();

    if (this.isModified('password')) {
        var unsafePassword = this.password;
        var salt = _bcrypt2.default.genSaltSync(SALT);
        this.password = _bcrypt2.default.hashSync(unsafePassword, salt);
    } else {
        next();
    }

    next();
});

exports.default = _mongoose2.default.model('user', userSchema);