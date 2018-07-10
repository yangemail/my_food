'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
const util = require('util');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const configureMongoose = require('../../src/bootstrap/mongoose.server.bootstrap');

const Recipe = require('../../src/model/recipe.server.model')
    , User = require('../../src/model/user.server.model');

async function test() {
    const db = configureMongoose();

    let user1 = await new User({
        username: '111@gmail.com',
        password: '11',
        nickname: '路人甲',
        isAdmin: false,
        register_date: Date.now(),
        is_blocked: false,
        hidden: false,
    }).save();
    let user2 = await new User({
        username: '222@gmail.com',
        password: '22',
        nickname: '路人乙',
        isAdmin: false,
        register_date: Date.now(),
        is_blocked: false,
        hidden: false,
    }).save();
    let user3 = await new User({
        username: '333@gmail.com',
        password: '33',
        nickname: '路人丙',
        isAdmin: false,
        register_date: Date.now(),
        is_blocked: false,
        hidden: false,
        attention: [user1.id],
        friends: [user1.id, user2.id]
    }).save();

    let recipe1 = await new Recipe({
        author: user3.id,
        title: '清炒蒜黄',
        title_image_path: 'https://s1.st.meishij.net/r/231/00/2937731/s2937731_152801967846614.jpg',
        // 菜品细节
        cook_info: {
            food_function: ['疾病调理', '人群膳食'],
            craftwork: '煎',
            flavor: '甜味',
            difficulty: 5,
        },
        ingredient: {
            // 主料
            major: [{
                material_image_path: 'http://images.meishij.net/p/20111019/af0aa683a0aa3bc1345eac465d56ee3c_60x60.jpg',
                name: '蒜黄',
                num: 400,
                unit: '克',
            },
                {
                    material_image_path: 'http://images.meishij.net/p/20120221/73fb34f7b214dae7e9b7fa90f6bbec67_60x60.jpg',
                    name: '蒜瓣',
                    num: 4,
                    unit: '个'
                }],
            // 辅料
            sub: [{
                material_image_path: "",
                name: '盐',
                num: 5,
                unit: '克',
                links: ['www.baidu.com']
            }]
        },
        meta: {
            stars: 3,
            votes: 50,
            bookmarked: 10,
            viewed: 1,
        },
    }).save().then(function (recipe) {
        User.update({_id: user3.id}, {$set: {recipes: [recipe.id]}});
    });

    let recipe2 = await new Recipe({
        author: user3.id,
        title: '清炒蒜黄2',
        title_image_path: 'https://s1.st.meishij.net/r/231/00/2937731/s2937731_152801967846614.jpg',
        // 菜品细节
        cook_info: {
            food_function: ['疾病调理', '人群膳食'],
            craftwork: '煎',
            flavor: '甜味',
            difficulty: 5,
        },
        ingredient: {
            // 主料
            major: [{
                material_image_path: 'http://images.meishij.net/p/20111019/af0aa683a0aa3bc1345eac465d56ee3c_60x60.jpg',
                name: '蒜黄2',
                num: 400,
                unit: '克',
            },
                {
                    material_image_path: 'http://images.meishij.net/p/20120221/73fb34f7b214dae7e9b7fa90f6bbec67_60x60.jpg',
                    name: '蒜瓣2',
                    num: 4,
                    unit: '个'
                }],
            // 辅料
            sub: [{
                material_image_path: "",
                name: '盐',
                num: 5,
                unit: '克',
                links: ['www.baidu.com']
            }]
        },
        meta: {
            stars: 3,
            votes: 50,
            bookmarked: 10,
            viewed: 1,
        },
    }).save().then(function (recipe) {
        User.update({_id: user3.id}, {$set: {recipes: [recipe.id]}});
    });

    let recipe3 = await new Recipe({
        author: user3.id,
        title: '清炒蒜黄3',
        title_image_path: 'https://s1.st.meishij.net/r/231/00/2937731/s2937731_152801967846614.jpg',
        // 菜品细节
        cook_info: {
            food_function: ['疾病调理', '人群膳食'],
            craftwork: '煎',
            flavor: '甜味',
            difficulty: 5,
        },
        ingredient: {
            // 主料
            major: [{
                material_image_path: 'http://images.meishij.net/p/20111019/af0aa683a0aa3bc1345eac465d56ee3c_60x60.jpg',
                name: '蒜黄3',
                num: 400,
                unit: '克',
            },
                {
                    material_image_path: 'http://images.meishij.net/p/20120221/73fb34f7b214dae7e9b7fa90f6bbec67_60x60.jpg',
                    name: '蒜瓣3',
                    num: 4,
                    unit: '个'
                }],
            // 辅料
            sub: [{
                material_image_path: "",
                name: '盐',
                num: 5,
                unit: '克',
                links: ['www.baidu.com']
            }]
        },
        meta: {
            stars: 3,
            votes: 50,
            bookmarked: 10,
            viewed: 1,
        },
    }).save().then(function (recipe) {
        User.update({_id: user3.id}, {$set: {recipes: [recipe.id]}});
    });

    console.log("------ Done -------");
}

test();