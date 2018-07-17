'use strict';

// const Category = require('../model/category.server.model');
const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , json2 = require('json-js')
    , User = require('mongoose').model('User')
    , passport = require('passport')
    , {PROJECT_ROOT_PATH} = require('../config/constant.server.config');


exports.recipeId = function (req, res, next) {
    res.render('web/recipe_detail', {});
};

exports.renderAddRecipe = function (req, res, next) {
    res.render('web/recipe_add', {});
};
