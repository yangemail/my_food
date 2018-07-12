'use strict';

// const Category = require('../model/category.server.model');
const path = require('path');

exports.index = function (req, res, next) {
    res.render('api/index_index', {});
};

exports.recipeId = function (req, res, next) {
    res.render('api/recipe_detail', {});
};