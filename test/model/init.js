'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const configureMongoose = require('../../src/bootstrap/mongoose.server.bootstrap');

const Comment = require('../../src/model/comment.server.model')
    , CookInfo = require('../../src/model/cookinfo.server.model')
    , Recipe = require('../../src/model/recipe.server.model')
    , StepDetail = require('../../src/model/stepdetail.server.model')
    , User = require('../../src/model/user.server.model');

async function test() {
    const db = configureMongoose();

    // 用户1
    let user1 = new User({
        username: '111@gmail.com',
        password: '11',
        nickname: '路人甲',
        isAdmin: false,
        register_date: Date.now(),
        is_blocked: false,
        hidden: false,
    }).save(function (err, newUser1) {
        // 用户2
        let user2 = new User({
            username: '222@gmail.com',
            password: '22',
            nickname: '路人乙',
            isAdmin: false,
            register_date: Date.now(),
            is_blocked: false,
            hidden: false,
        }).save(function (err, newUser2) {
            // 用户3
            let user3 = new User({
                username: '333@gmail.com',
                password: '33',
                nickname: '路人丙',
                isAdmin: false,
                register_date: Date.now(),
                is_blocked: false,
                hidden: false,
                attention: [newUser1.id],
                friends: [newUser1.id, newUser2.id]
            }).save(function (err, newUser3) {
                let recipe1 = new Recipe({
                    title: '清炒蒜黄',
                    title_image_path: 'https://s1.st.meishij.net/r/231/00/2937731/s2937731_152801967846614.jpg',
                    author: newUser3.id,
                    "meta.votes": 100,
                    "meta.favs": 50,
                    // 主料
                    major_material: [{
                        material_image_path: 'http://images.meishij.net/p/20111019/af0aa683a0aa3bc1345eac465d56ee3c_60x60.jpg',
                        name: '蒜黄',
                        num: 400,
                        unit: '克'
                    },{
                        material_image_path: 'http://images.meishij.net/p/20120221/73fb34f7b214dae7e9b7fa90f6bbec67_60x60.jpg',
                        name: '蒜瓣',
                        num: 4,
                        unit: '个'
                    }],
                    // 辅料

                }).save(function (err, newRecipe1) {
                    console.log('newUser3.id.toString() = ' + newUser3.id.toString());
                    console.log('newRecipe1.id = ' + newRecipe1.id);

                    User.update({_id: newUser3.id}, {$set: {recipes: [newRecipe1.id]}}).exec();


                    console.log("------ Done -------");
                    // db.close();
                })
            });
        });
    });
}


function test2() {
    Recipe.create({title: 'hello world'}, function (err, item) {

    });
}

test();