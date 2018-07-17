'use strict';

const express = require('express');
const router = express.Router();
const recipeController = require('../../controller/recipe.server.controller');
const passport = require('passport');

const asyncHandler = require('express-async-handler');

module.exports = function (app) {
    app.route('/web/recipe/get')
        .get(asyncHandler(recipeController.recipeId));
    app.route('/web/recipe/add')
        .get(asyncHandler(recipeController.renderAddRecipe));
};