'use strict';

// const Category = require('../model/category.server.model');
const path = require('path')
    , fs = require('fs')
    , util = require('util')
    , Recipe = require('mongoose').model('Recipe')
    , {PROJECT_ROOT_PATH} = require('../config/constant.server.config')
    , multer = require('multer')
    , shortid = require('shortid')
    , constant = require('../config/constant.server.config')
    , mongoose = require('mongoose');

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

// Use "recipeId" to determine whether is a Create / Edit
exports.renderCreateOrUpdate = function (req, res) {
    let objectId;
    // Sent by Add / Edit recipe page.
    // const uniqueId = req.flash('uniqueId');
    // console.log(uniqueId);
    // if(!uniqueId) {
    objectId = mongoose.Types.ObjectId();
    console.log('objectId = ' + objectId);
    // } else{
    //     objectId = uniqueId;
    // }

    res.render('web/recipe_add', {
        uniqueId: objectId.toString(),
        // 区域
        countryOptions: constant.DATASET_COUNTRY,
        chinaLocalCuisineOptions: constant.DATASET_CHINA_LOCAL_CUISINE,
        chinaLocalSnakeOptions: constant.DATASET_CHINA_LOCAL_SNAKE,
        foreignFoodOrderOptions: constant.DATASET_FOREIGN_FOOD_ORDER,
        // 类型
        serveTypeOptions: constant.DATASET_SERVE_TYPE,
        foodTimeOptions: constant.DATASET_FOOD_TIME,
        foodSpecialEventChinaOptions: constant.DATASET_FOOD_SPECIAL_EVENT_CHINA,
        foodSpecialEventWesternCountryOptions: constant.DATASET_FOOD_SPECIAL_EVENT_WESTERN_COUNTRY,
        foodComfortPeopleOptions: constant.DATASET_FOOD_CONFORT_PEOPLE,
        // 属性
        craftworkOptions: constant.DATASET_CRAFTWORK,
        flavorOptions: constant.DATASET_FLAVOR,
        difficultyOptions: constant.DATASET_DIFFICULTY,
    });
};

exports.create = function (req, res) {
    const recipe = new Recipe(req.body);

    recipe._id = req.body['uniqueId'];
    recipe.author = req.user;
    console.log('user -> ' + req.user);

    // CookInfo
    const cookInfo = recipe.cookInfo;
    cookInfo['country'] = req.body['cookInfoCountry'];
    cookInfo['chinaLocalCuisine'] = req.body['cookInfoChinaLocalCuisine'];
    cookInfo['chinaLocalSnake'] = req.body['cookInfoChinaLocalSnake'];
    cookInfo['foreignFoodOrder'] = req.body['cookInfoForeignFoodOrder'];
    cookInfo['serveType'] = req.body['cookInfoServeType'];
    cookInfo['foodTime'] = req.body['cookInfoFoodTime'];
    cookInfo['foodSpecialEvent'] = req.body['cookInfoFoodSpecialEvent'];
    cookInfo['foodComfortPeople'] = req.body['cookInfoFoodComfortPeople'];
    cookInfo['craftwork'] = req.body['cookInfoCraftwork'];
    cookInfo['flavor'] = req.body['cookInfoFlavor'];
    cookInfo['difficulty'] = req.body['cookInfoDifficulty'];
    cookInfo.preparation['time'] = req.body['cookInfoPreparationTime'];
    cookInfo.preparation['unit'] = req.body['cookInfoPreparationUnit'];
    cookInfo.cooking['time'] = req.body['cookInfoCookingTime'];
    cookInfo.cooking['unit'] = req.body['cookInfoCookingUnit'];
    cookInfo['servingsOfPeople'] = req.body['cookInfoServingsOfPeople'];

    // 原料
    // const major = recipe.ingredients;
    // major.push({
    //     ingredient:
    // });

    // 步骤
    const stepsCount = req.body['stepsCount'];
    const steps =recipe.steps;
    for(let i = 1; i <= stepsCount; i++) {
        let _description = req.body[`stepsDescription${i}`];
        if (_description) {
            steps.push({
                imagePath: req.body[`stepsImagePath${i}`],
                description: _description,
                sequence: req.body[`stepsSequence${i}`]
            });
        }
    }

    // 成品图
    const completePics = recipe.completePics;
    for(let i = 1; i <= 4; i++) {
        let _imagePath = req.body[`completePicsImagePath${i}`];
        if (_imagePath) {
            completePics.push({
                imagePath: _imagePath,
                sequence: req.body[`completePicsSequence${i}`]
            });
        }
    }

    // 小技巧


    console.log("recipe -> " + recipe);

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
            // If param is a need Json, then send Json, otherwise, render list recipes page.
            // res.status(200).json(recipes);
            res.render('', {});
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
    // If json is require, send json
    // res.status(200).json(req.recipe);
    res.render('web/recipe_detail', {
        recipe: req.recipe
    });
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

exports.multerConfig = multer({
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
    {name: 'titleImageUpload', maxCount: 1},
    {name: 'stepsImageUpload1', maxCount: 1},
    {name: 'stepsImageUpload2', maxCount: 1},
    {name: 'stepsImageUpload3', maxCount: 1},
    {name: 'stepsImageUpload4', maxCount: 1},
    {name: 'stepsImageUpload5', maxCount: 1},
    {name: 'stepsImageUpload6', maxCount: 1},
    {name: 'stepsImageUpload7', maxCount: 1},
    {name: 'stepsImageUpload8', maxCount: 1},
    {name: 'stepsImageUpload9', maxCount: 1},
    {name: 'stepsImageUpload10', maxCount: 1},
    {name: 'stepsImageUpload11', maxCount: 1},
    {name: 'stepsImageUpload12', maxCount: 1},
    {name: 'stepsImageUpload13', maxCount: 1},
    {name: 'stepsImageUpload14', maxCount: 1},
    {name: 'stepsImageUpload15', maxCount: 1},
    {name: 'completePicsImageUpload1', maxCount: 1},
    {name: 'completePicsImageUpload2', maxCount: 1},
    {name: 'completePicsImageUpload3', maxCount: 1},
    {name: 'completePicsImageUpload4', maxCount: 1},
]);

exports.upload = function (req, res, next) {
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