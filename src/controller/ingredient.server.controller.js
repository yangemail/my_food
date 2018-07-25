'use strict';

const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , json2 = require('json-js')
    , passport = require('passport')
    , {PROJECT_ROOT_PATH} = require('../config/constant.server.config')
    , Ingredient = require('mongoose').model('Ingredient');

exports.findByNameLike = function (req, res, next) {
    const name = req.query.search;
    if (name) {
        Ingredient.findByNameLike(name, function (err, outcome) {
            res.json(outcome);
        });
    } else {
        res.end();
    }

};