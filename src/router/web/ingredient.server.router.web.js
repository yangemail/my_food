'use strict';

const express = require('express');
const router = express.Router();
const ingredientCtrl = require('../../controller/ingredient.server.controller');

const asyncHandler = require('express-async-handler');

module.exports = function (app) {
    app.route('/web/search/names').get(asyncHandler(ingredientCtrl.findByNameLike));
};