'use strict';

// const Category = require('../model/category.server.model');
const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , Recipe = require('mongoose').model('Recipe')
    , {PROJECT_ROOT_PATH} = require('../config/constant.server.config')
    , multer = require('multer')
    , shortid = require('shortid');

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

exports.recipeId = function (req, res, next) {
    res.render('web/recipe_detail', {});
};

exports.renderAddRecipe = function (req, res, next) {
    res.render('web/recipe_add', {});
};

//图片上传配置
var storageImg = multer.diskStorage({
    destination: function (req, file, cb) {
        req.query.uniqueId = req.query.uniqueId ? req.query.uniqueId : new Date().getTime() + '';
        if (req.query.uniqueId) {
            var dirPathParent = path.join(PROJECT_ROOT_PATH, '/www/uploads/recipe/', req.query.uniqueId),
                dirPath = path.join(dirPathParent, '/img');//不能直接创建dirPath，因为父目录不存在会抛出异常
            fs.mkdir(dirPathParent, function (err) {
                if (err && err.code !== 'EEXIST') {
                    cb(err);
                } else {
                    fs.mkdir(dirPath, function (err) {
                        if (err && err.code !== 'EEXIST') {
                            cb(err);
                        } else {
                            cb(null, dirPath);
                        }
                    });
                }
            });
        } else {
            cb(new Error('参数uniqueId不存在！'));
        }
    },
    filename: function (req, file, cb) {
        var fileName = file.originalname.substring(0, file.originalname.lastIndexOf('.')) + '_' + shortid.generate();
        var ext = path.extname(file.originalname);
        var fullName = fileName + ext;
        cb(null, fullName)
    }
});

exports.upload = multer({
    storage: storageImg,
    limits: {
        filedNameSize: 50 * 1024,
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Only image files are allowed!'));
        }
        cb(null, true);
    }
}).fields([
    {name: 'mainpic', maxCount: 1},
    {name: 'step1pic', maxCount: 1},
    {name: 'step2pic', maxCount: 1},
    {name: 'step3pic', maxCount: 1},
    {name: 'step4pic', maxCount: 1},
    {name: 'step5pic', maxCount: 1},
    {name: 'step6pic', maxCount: 1},
    {name: 'step7pic', maxCount: 1},
    {name: 'step8pic', maxCount: 1},
    {name: 'step9pic', maxCount: 1},
    {name: 'step10pic', maxCount: 1},
    {name: 'step11pic', maxCount: 1},
    {name: 'step12pic', maxCount: 1},
    {name: 'step13pic', maxCount: 1},
    {name: 'step14pic', maxCount: 1},
    {name: 'step15pic', maxCount: 1},
    {name: 'done1pic', maxCount: 1},
    {name: 'done2pic', maxCount: 1},
    {name: 'done3pic', maxCount: 1},
    {name: 'done4pic', maxCount: 1},
]);

exports.postUpload = function (req, res, next) {
    let file;
    for (var k in req.files) {
        file = req.files[k][0];
        break;
    }

    res.json({
        state: "SUCCESS",
        url: '/uploads/recipe/' + req.query.uniqueId + '/img/' + file.filename,//此处不能用path.join，因为path会使用'\'分隔符，而url地址必须是'/'分隔符
        title: file.originalname,
        original: file.originalname,
        error: null
    });
};