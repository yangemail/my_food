'use strict';

const express = require('express');
const router = express.Router();
const recipeCtrl = require('../../controller/recipe.server.controller');
const passport = require('passport');

const asyncHandler = require('express-async-handler');

module.exports = function (app) {
    app.route('/web/recipe/get')
        .get(asyncHandler(recipeCtrl.recipeId));
    app.route('/web/recipe/add')
        .get(asyncHandler(recipeCtrl.renderAddRecipe));
    app.route('/web/recipe/add/upload')
        .post(recipeCtrl.upload, recipeCtrl.postUpload);
};