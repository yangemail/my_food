'use strict';

const express = require('express');
const router = express.Router();
const userCtrl = require('../../controller/user.server.controller');
const passport = require('passport');
const asyncHandler = require('express-async-handler');

module.exports = function (app) {

    app.route('/web/user/profile')
        .get(asyncHandler(userCtrl.userIndex));
    app.route('/web/user/register')
        .get(asyncHandler(userCtrl.userRenderRegister))
        .post(asyncHandler(userCtrl.userRegister));
    app.route('/web/user/agreement')
        .get(asyncHandler(userCtrl.userAgreement));
    app.route('/web/user/login')
        .get(asyncHandler(userCtrl.userRenderLogin))
        .post(asyncHandler(userCtrl.userLogin));
        // .post(passport.authenticate('local', {
        //     successRedirect: '/web',
        //     failureRedirect: '/web/user/login',
        //     failureFlash: true
        // }));

    // Facebook OAuth
    app.get('/web/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/web/user/login'
    }));
    app.get('/web/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/web/user/login',
        successRedirect: '/web/'
    }));

    // Twitter OAuth
    app.get('/web/oauth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/web/user/login'
    }));
    app.get('/web/oauth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/web/user/login',
        successRedirect: '/web/'
    }));

    // Google OAuth2
    app.get('/web/oauth/google', passport.authenticate('google', {
        failureRedirect: '/web/user/login',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ],
    }));
    app.get('/web/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/web/user/login',
        successRedirect: '/web/'
    }));

    app.get('/web/signout', userCtrl.signout);

};