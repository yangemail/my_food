'use strict';

// const Category = require('../model/category.server.model');
const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , json2 = require('json-js');

exports.index = function (req, res, next) {
    res.render('web/index_index', {});
};

exports.recipeId = function (req, res, next) {
    res.render('web/recipe_detail', {});
};

exports.renderAddRecipe = function (req, res, next) {
    res.render('web/recipe_add', {});
};

exports.userIndex = function (req, res, next) {
    res.render('web/user_index', {});
};

exports.userRenderRegister = function (req, res, next) {
    res.render('web/user_register', {
        agreementUrl: '/web/user/agreement'
    });
};

exports.userAgreement = async function (req, res, next) {
    fs.readFile(path.join(path.dirname(require.main.filename), '/src/config/language/agreement_zh-CN.txt'), 'utf8', function (err, data) {
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