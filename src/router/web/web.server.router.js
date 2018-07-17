'use strict';

const express = require('express');
const router = express.Router();
const web = require('../../controller/web.server.controller');
const passport = require('passport');

const asyncHandler = require('express-async-handler');

module.exports = function (app) {

    // Recipe
    app.route('/web').get(asyncHandler(web.index));
    app.route('/web/recipe/:id').get(asyncHandler(web.recipeId));
    app.route('/web/addrecipe').get(asyncHandler(web.renderAddRecipe));

    // User
    app.route('/web/user')
        .get(asyncHandler(web.userIndex));
    app.route('/web/user/register')
        .get(asyncHandler(web.userRenderRegister))
        .post(asyncHandler(web.userRegister));
    app.route('/web/user/agreement')
        .get(asyncHandler(web.userAgreement));
    app.route('/web/user/login')
        .get(asyncHandler(web.userRenderLogin))
        .post(passport.authenticate('local', {
            successRedirect: '/web',
            failureRedirect: '/web/user/login',
            failureFlash: true
        }));
    app.get('/web/signout', web.signout);

};