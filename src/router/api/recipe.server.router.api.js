'use strict';

/**
 * GET - list of articles: http://localhost:3000/articles
 * POST - create and return a new article: http://localhost:3000/articles
 * GET - return a single existing article: http://localhost:3000/articles/:articleId
 * PUT - update and return a single existing article: http://localhost:3000/articles/:articleId
 * DELETE - delete and return a single article: http://localhost:3000/articles/:articlesId
 */

const userCtrl = require('../../controller/user.server.controller');
const recipeCtrl = require('../../controller/api/recipe.server.controller');

module.exports = function (app) {
    app.route('/api/articles')
        .get(recipeCtrl.list)
        .post(userCtrl.requiresLogin, recipeCtrl.create);

    app.route('/api/articles/:articleId')
        .get(recipeCtrl.read)
        .put(userCtrl.requiresLogin, recipeCtrl.hasAuthorization, recipeCtrl.update)
        .delete(userCtrl.requiresLogin, recipeCtrl.hasAuthorization, recipeCtrl.delete);

    app.param('recipeId', recipeCtrl.recipeByID);
}