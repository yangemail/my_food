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

    let users = [];
    for (let i = 0; i < 10; i++) {
        let user = await new User({
            username: i + i + i + '@gmail.com',
            password: i + i + i + '',
            nickname: '路人' + i,
            isAdmin: false,
            register_date: Date.now(),
            is_blocked: false,
            hidden: false,
        }).save();
        users.push(user);
    }

    await User.update({_id: users[3].id}, {
        $set: {
            attention: [users[1].id, users[2].id],
            friends: [users[0].id, users[1].id, users[2].id]
        }
    }).exec();

    for(let i = 0; i < 100; i++) {
        let recipe = await new Recipe({
            author: users[3].id,
            title: '清炒蒜黄' + i + i,
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
            User.update({_id: users[3].id}, {$set: {recipes: [recipe.id]}}).exec();
        });
    }
    
    console.log("------ Done -------");
}

test();