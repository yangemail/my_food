'use strict';

const asyncHandler = require('express-async-handler');

const express = require('express');
const router = express.Router();

module.exports = function (app) {
    const admin = require('../controller/admin.server.controller');

    app.use('/admin', router);

    router.get('/', asyncHandler(admin.adminIndex));

    router.get('/category', asyncHandler(admin.category));

    router.get('/category/add', asyncHandler(admin.renderCategoryAdd))
        .post('/category/add', asyncHandler(admin.categoryAdd));

    router.get('/category/edit', asyncHandler(admin.renderCategoryEdit))
        .post('/category/edit', asyncHandler(admin.categoryEdit));

    router.get('/category/delete', asyncHandler(admin.categoryDelete));
};