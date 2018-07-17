'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../../controller/user.server.controller');
const passport = require('passport');
const asyncHandler = require('express-async-handler');

module.exports = function (app) {

    app.route('/web/user/profile')
        .get(asyncHandler(userController.userIndex));
    app.route('/web/user/register')
        .get(asyncHandler(userController.userRenderRegister))
        .post(asyncHandler(userController.userRegister));
    app.route('/web/user/agreement')
        .get(asyncHandler(userController.userAgreement));
    app.route('/web/user/login')
        .get(asyncHandler(userController.userRenderLogin))
        .post(passport.authenticate('local', {
            successRedirect: '/web',
            failureRedirect: '/web/user/login',
            failureFlash: true
        }));
    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/web/user/login'
    }));
    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/web/user/login',
        successRedirect: '/'
    }));
    app.get('/web/signout', userController.signout);

};