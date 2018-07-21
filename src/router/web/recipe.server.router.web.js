'use strict';

const express = require('express');
const router = express.Router();
const recipeCtrl = require('../../controller/recipe.server.controller');
const passport = require('passport');

module.exports = function (app) {
    app.route('/web/recipes/upload')
        .post(recipeCtrl.multerConfig, recipeCtrl.upload);

    app.route('/web/recipes/render')
        .get(recipeCtrl.renderCreateOrUpdate);

    app.route('/web/recipes')
        .get(recipeCtrl.list)
        .post(recipeCtrl.create);

    app.route('/web/recipes/:recipeId')
        .get(recipeCtrl.read)
        .put(recipeCtrl.update)
        .delete(recipeCtrl.delete);

    app.param('recipeId', recipeCtrl.recipeByID);
};