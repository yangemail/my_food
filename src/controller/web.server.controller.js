'use strict';

// const Category = require('../model/category.server.model');
const path = require('path');

exports.index = function (req, res, next) {
    res.render('web/index_index', {});
};

exports.recipeId = function (req, res, next) {
    res.render('web/recipe_detail', {});
};

exports.renderAddRecipe = function (req, res, next) {
    res.render('web/recipe_add', {});
}

exports.userIndex = function (req, res, next) {
    res.render('web/user_index', {});
}