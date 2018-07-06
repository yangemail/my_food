'use strict';

const User = require('../model/user.server.model');
const Category = require('../model/category.server.model');
const Book = require('../model/book.server.model');
const Chapter = require('../model/chapter.server.model');

let ObjectId = require('mongoose').Types.ObjectId;

exports.adminIndex = function (req, res, next) {
    res.render('admin/index_index', {});
};

exports.category = async function (req, res, next) {
    let page = Number(req.query.page || 1);
    let limit = 10;
    let pages = 0;
    let skip = 0;

    let count = await Category.countDocuments();

    // 计算总页数
    pages = Math.ceil(count / limit);
    // 取值不能超过pages
    page = Math.min(page, pages);
    // 取值不能小于1
    page = Math.max(page, 1);
    skip = (page - 1) * limit;

    let categories = await Category.find().sort({sequence: 1}).limit(limit).skip(skip);
    res.render('admin/category_index', {
        categories: categories,

        count: count,
        pages: pages,
        limit: limit,
        page: page
    });
};

exports.renderCategoryAdd = async function (req, res, next) {
    res.render('admin/category_add', {});
};

exports.categoryAdd = async function (req, res, next) {
    let name = req.body.name || '';
    let sequence = req.body.sequence || 0;

    if (name == '') {
        res.render('admin/error', {
            message: '名称不能为空'
        });
    }

    // 数据库中是否已经存在同名分类名称
    let rs = await Category.findOne({name: name});
    if (rs) {
        // 数据库中已经存在该分类了
        res.render('admin/error', {
            message: '分类已经存在了'
        });
        // return;
    } else {
        // 数据库中不存在该分类，可以保存
        let newCategory = await new Category({
            name: name,
            sequence: sequence
        }).save();

        res.render('admin/success', {
            message: '分类保存成功',
            url: '/admin/category'
        });
    }
};

exports.categoryDelete = async function (req, res, next) {
    // 获取要删除的分类ID
    let id = req.query.id || '';

    await Category.remove({_id: id});
    res.render('admin/success', {
        message: '删除成功',
        url: '/admin/category'
    });
};

exports.renderCategoryEdit = async function (req, res, next) {
    let id = req.query.id || '';

    let category = await Category.findOne({_id: id});
    if (!category) {
        res.render('admin/error', {
            message: '分类信息不存在'
        });
    } else {
        res.render('admin/category_edit', {
            category: category
        });
    }
};

exports.categoryEdit = async function (req, res, next) {
    let id = req.body.id || '';
    let name = req.body.name || '';
    let sequence = req.body.sequence || 1;
    let subcategory = req.body.subcategory || '';
    let subcategoryArr = subcategory.split(',');

    console.log('from request :::::: ' + subcategoryArr);

    let category = await Category.findOne({_id: id})
    if (!category) {
        res.render('admin/error', {
            message: '分类信息不存在'
        });
    }
    // else if(name === category.name) {
    //     //当用户没有做任何的修改提交的时候
    //     res.render('admin/success', {
    //         message: '修改成功',
    //         url: '/admin/category'
    //     });
    // }
    else {
        //要修改的分类名称是否已经在数据库中存在
        let sameCategory = await Category.findOne({
            _id: {$ne: id},
            name: name
        });
        if (sameCategory) {
            res.render('admin/error', {
                userInfo: req.userInfo,
                message: '数据库中已经存在同名分类'
            });
        } else {
            let objectIds = [];
            subcategoryArr.forEach(function (item) {
                var objectId = new ObjectId(item);
                objectIds.push(objectId);
            });

            console.log("objectId :::::: " + objectIds);

            await Category.update({
                _id: id
            }, {
                name: name,
                sequence: sequence,
                categories: objectIds,
            });

            res.render('admin/success', {
                message: '修改成功',
                url: '/admin/category'
            });
        }
    }
};
