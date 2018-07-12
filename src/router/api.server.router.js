'use strict';

const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');

module.exports = function (app) {
    const api = require('../controller/api.server.controller');

    app.use('/', router);

    router.get('/', asyncHandler(api.index));

    router.get('/recipe/:id', asyncHandler(api.recipeId));
};