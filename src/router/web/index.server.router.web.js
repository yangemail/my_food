'use strict';

const express = require('express');
const router = express.Router();
const web = require('../../controller/web.server.controller');

const asyncHandler = require('express-async-handler');

module.exports = function (app) {
    app.route('/web').get(asyncHandler(web.index));
};