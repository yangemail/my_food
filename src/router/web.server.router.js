'use strict';

const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');

module.exports = function (app) {
    const api = require('../controller/web.server.controller');

    app.use('/web', router);

    // Recipe
    router.get('/', asyncHandler(api.index));
    router.get('/recipe/:id', asyncHandler(api.recipeId));
    router.get('/addrecipe', asyncHandler(api.renderAddRecipe));

    // User
    router.get('/user', asyncHandler(api.userIndex));
};