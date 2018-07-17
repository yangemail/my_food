'use strict';

const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , json2 = require('json-js')
    , User = require('mongoose').model('User')
    , passport = require('passport')
    , {PROJECT_ROOT_PATH} = require('../config/constant.server.config');

function getErrorMessage(err) {
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (let errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    return message;
};

exports.userIndex = function (req, res, next) {
    res.render('web/user_index', {});
};

exports.userRenderRegister = function (req, res, next) {
    if (!req.user) {
        res.render('web/user_register', {
            title: '注册',
            messages: req.flash('error')
        });
    } else {
        return res.redirect('/web/');
    }
};

exports.userRegister = function (req, res, next) {
    if (!req.user) {
        const user = new User(req.body);
        user.provider = 'local';

        user.save((err) => {
            if (err) {
                const message = getErrorMessage(err);
                req.flash('error', message);
                return res.redirect('/web/user/register');
            }
            req.login(user, (err) => {
                if (err) {
                    return next(err);
                }
                return res.redirect('/web/');
            });
        });
    } else {
        return res.redirect('/web/');
    }
};

exports.signout = function (req, res) {
    req.logout();
    res.redirect('/web/');
};

exports.userRenderLogin = function (req, res, next) {
    if (!req.user) {
        res.render('web/user_login', {
            title: '登陆',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/web/');
    }
};

exports.userAgreement = async function (req, res, next) {
    fs.readFile(path.join(PROJECT_ROOT_PATH, '/src/config/language/agreement_zh-CN.txt'), 'utf8', function (err, data) {
        if (err) {
            next(err);
        } else {
            let title = data.substring(0, data.indexOf('\n'));
            let content = data.substring(data.indexOf('\n'),);
            res.render('web/user_agreement', {
                outcome: {
                    "title": title,
                    "content": content
                }
            });
        }
    });
};

exports.saveOAuthUserProfile = function (req, profile, done) {
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, (err, user) => {
        if (err) {
            return done(err);
        } else {
            if (!user) {
                const possibleUsername = profile.username ||
                    ((profile.email) ? profile.email.split('@')[0] : '');
                User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
                    const newUser = new User(profile);
                    newUser.username = availableUsername;
                    newUser.save((err) => {
                        return done(err, newUser);
                    });
                });
            } else {
                return done(err, user);
            }
        }
    });
};