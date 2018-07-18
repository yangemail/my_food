'use strict';

// const Category = require('../model/category.server.model');
const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , json2 = require('json-js')
    , Recipe = require('mongoose').model('Recipe')
    , passport = require('passport')
    , {PROJECT_ROOT_PATH} = require('../config/constant.server.config');

exports.hasAuthorization = function (req, res, next) {
    if (req.recipe.author.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};

function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) {
                return err.errors[errName];
            }
        }
    } else {
        return 'Unknown server error';
    }
}

exports.create = function (req, res) {
    const recipe = new Recipe(req.body);
    recipe.author = req.user;

    recipe.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(recipe);
        }
    });
};

exports.list = function (req, res) {
    Recipe.find().sort('-createdAt').populate('author', 'firstName lastName fullName').exec((err, recipes) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(recipes);
        }
    });
};

exports.recipeByID = function (req, res, next, id) {
    Recipe.findById(id).populate('author', 'firstName lastName fullName').exec((err, recipe) => {
        if (err) {
            return next(err);
        }
        if (!recipe) {
            return next(new Error('Failed to load recipe' + id));
        }

        req.recipe = recipe;
        next();
    });
};

exports.read = function (req, res) {
    res.status(200).json(req.recipe);
};

exports.update = function (req, res) {
    const recipe = req.recipe;

    recipe.title = req.body.title;
    recipe.content = req.body.content;

    recipe.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(recipe);
        }
    });
};

exports.delete = function (req, res) {
    const recipe = req.recipe;

    recipe.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(recipe);
        }
    })
};