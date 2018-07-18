'use strict';

// const Category = require('../model/category.server.model');
const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , json2 = require('json-js')
    , User = require('mongoose').model('User')
    , passport = require('passport')
    , {PROJECT_ROOT_PATH} = require('../config/constant.server.config');

exports.render = function (req, res) {

    res.render('index', {
        title: 'Hello World',
        user: JSON.stringify(user)
    })
};

exports.index = function (req, res, next) {
    const user = (!req.user) ? null : {
        _id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName
    };

    res.render('web/index_index', {
        title: '首页',
        username: req.user ? req.user.username : '',
        user: JSON.stringify(user)
    });
};