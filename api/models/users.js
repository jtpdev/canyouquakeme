'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    points: {
        type: Number
    },
    steamlink: {
        type: String
    },
    country: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Users', userSchema);