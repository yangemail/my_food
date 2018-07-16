'use strict';

const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');

module.exports = function (app) {
    const web = require('../controller/web.server.controller');

    app.use('/web', router);

    // Recipe
    router.get('/', asyncHandler(web.index));
    router.get('/recipe/:id', asyncHandler(web.recipeId));
    router.get('/addrecipe', asyncHandler(web.renderAddRecipe));

    // User
    router.get('/user', asyncHandler(web.userIndex));
    router.get('/user/register', asyncHandler(web.userRenderRegister));
    router.get('/user/agreement', asyncHandler(web.userAgreement));
};