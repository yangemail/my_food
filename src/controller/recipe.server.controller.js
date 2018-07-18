'use strict';

// const Category = require('../model/category.server.model');
const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , json2 = require('json-js')
    , Recipe = require('mongoose').model('Recipe')
    , passport = require('passport')
    , {PROJECT_ROOT_PATH} = require('../config/constant.server.config');

function getErrorMessage(err) {
    if (err.errors) {
        for(let errName in err.errors) {
            if (err.errors[errName].message) {
                return err.errors[errName];
            }
        }
    } else {
        return 'Unknown server error';
    }
}

exports.recipeId = function (req, res, next) {
    res.render('web/recipe_detail', {});
};

exports.renderAddRecipe = function (req, res, next) {
    res.render('web/recipe_add', {});
};