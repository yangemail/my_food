'use strict';

const asyncMiddleware = require('../middleware/asyncMiddleware.server.middleware');

const express = require('express');
const router = express.Router();

module.exports = function (app) {
    const admin = require('../controller/admin.server.controller');

    app.use('/admin', router);

    router.get('/', admin.adminIndex);

    router.get('/category', admin.category);

    router.get('/category/add', admin.renderCategoryAdd)
        .post('/category/add', admin.categoryAdd);

    router.get('/category/edit', admin.renderCategoryEdit)
        .post('/category/edit', admin.categoryEdit);

    router.get('/category/delete', admin.categoryDelete);
};