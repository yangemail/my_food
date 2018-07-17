'use strict';

const express = require('express');
const router = express.Router();
const indexController = require('../../controller/index.server.controller');

const asyncHandler = require('express-async-handler');

module.exports = function (app) {
    app.route('/web').get(asyncHandler(indexController.index));
};