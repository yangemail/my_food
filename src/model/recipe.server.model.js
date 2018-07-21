'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , {
    DATASET_COUNTRY
    , DATASET_CHINA_LOCAL_CUISINE
    , DATASET_CHINA_LOCAL_SNAKE
    , DATASET_FOOD_TIME
    , DATASET_FOOD_CONFORT_PEOPLE
    , DATASET_FOOD_SPECIAL_EVENT_WESTERN_COUNTRY
    , DATASET_FOOD_SPECIAL_EVENT_CHINA
    , DATASET_CHINA_FOOD_STYLE
    , DATASET_FOREIGN_FOOD_ORDER
    , DATASET_SERVE_TYPE
    , DATASET_CRAFTWORK
    , DATASET_FLAVOR
} = require('../config/constant.server.config');

// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.

const RecipeSchema = new Schema({
    // 清炒柳芽菜
    title: {
        type: String,
        require: '标题不能为空',
        trim: true,
        index: true,
    },
    // 新媒体
    newMedia: {type: String},
    // 作者
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    //来源
    source: {type: String},
    // begin of -- 美食类型 -----
    foodStyle: {
        // 国家
        country: {
            type: String,
            index: true,
            validate: {
                validator: function (v) {
                    return DATASET_COUNTRY.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 适合中国菜谱
        chinaLocalCuisine: {
            type: String,
            validate: {
                validator: function (v) {
                    return DATASET_CHINA_LOCAL_CUISINE.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 中国各地小吃
        chinaLocalSnake: {
            type: String,
            validate: {
                validator: function (v) {
                    return DATASET_CHINA_LOCAL_SNAKE.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 中国菜谱类型
        chinaFoodStyle: {
            type: String,
            validate: {
                validator: function (v) {
                    return DATASET_CHINA_FOOD_STYLE.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 适合国外菜谱
        foreignFoodOrder: {
            type: String,
            validate: {
                validator: function (v) {
                    return DATASET_FOREIGN_FOOD_ORDER.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 类型
        // 食物类型（中国，国外）
        serveType: {
            type: String,
            validate: {
                validator: function (v) {
                    return DATASET_SERVE_TYPE.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 每日三餐（中国，国外）
        foodTime: {
            type: [String],
            validate: {
                validator: function (v) {
                    return DATASET_FOOD_TIME.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 节日（中国，国外）
        foodSpecialEvent: {
            type: String,
            validate: {
                validator: function (v) {
                    return DATASET_FOOD_SPECIAL_EVENT_WESTERN_COUNTRY.includes(v)
                        || DATASET_FOOD_SPECIAL_EVENT_CHINA.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 适合人群人群（中国，国外）
        foodComfortPeople: {
            type: [String],
            validate: {
                validator: function (v) {
                    return DATASET_FOOD_CONFORT_PEOPLE.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
    },
    // end of --美食类型

    // begin of 菜品细节
    cookInfo: {
        // 功效
        foodFunction: {
            type: [String],
            // Value 从食物中取得
        },
        // 工艺
        craftwork: {
            type: String,
            validate: {
                validator: function (v) {
                    return DATASET_CRAFTWORK.includes(v);
                }, message: '{VALUE}不在列表中'
            }
        },
        // 口味
        flavor: {
            type: String,
            validator: function (v) {
                return DATASET_FLAVOR.includes(v);
            }, message: '{VALUE}不在列表中'
        },
        // 难度
        difficulty: {
            type: Number,
            min: 0,
            max: 10
        },
        // 人数
        servingsOfPeople: {
            type: Number,
            min: 0,
            max: 20
        },
        // 准备时间
        prepareTime: {
            type: Number,
            min: 0
        },
        // 烹饪时间
        cookTime: {
            type: Number,
            min: 0
        },
    },
    // end of 菜品细节

    // 用料
    ingredient: {
        // 用料（主料）
        major: {
            type: [{
                imagePath: String,
                name: String,
                num: Number,
                unit: String,
                price: Number,
                links: [String]
            }],
        },
        // 用料 （辅料）
        sub: {
            type: [{
                imagePath: String,
                name: String,
                num: Number,
                unit: String,
                price: Number,
                links: [String]
            }],
        }
    },

    // begin of 菜谱细节 -----
    // 主图片
    titleImagePath: {
        type: String,
    },
    //摘要
    summary: {type: String},
    // 简介
    description: {
        type: String
    },
    steps: [{
        imagePath: String,
        stepDesc: String,
        sequence: Number
    }],
    completePics: [String],
    exportTips: String,
    conclusion: String,
    // end of 菜谱细节

    nutritionInformation: {
        servingSize: String,
        nutritionFacts: [{
            name: String,
            contains: String,
            percentage: Number,
        }],
        dailyValue: [{
            name: String,
            contains: String,
            percentage: Number,
        }],
        exchanges: String,
        comments: String,
        links: [String],
    },

    // 菜谱评论
    comments: [{
        // 评论人
        commentAuthor: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        // 星级
        commentStars: Number,
        // 评论类型
        commentType: {
            type: String,
            enum: ['闲聊', '提问', '动感', '赞'],
        },
        // 评论
        commentContent: String,
        // 评论日期
        commentCreatedAt: {
            type: Date,
            default: Date.now
        },
        // 评论图片
        commentImagePath: [String],
        // 评论赞同
        commentVoteUp: Number,

        // 回复作者
        replyAuthor: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        // 回复内容
        replyContent: String,
        // 回复日期
        replyCreatedAt: {
            type: Date,
            default: Date.now
        },
        // 回复赞同
        replyVoteUp: Number,
    }],
    status: {
        type: String,
        enum: ['draft', 'active', 'archived', 'deleted']
    },
    meta: {
        stars: {
            type: Number,
        },// 星级 - 仿Amazon
        voteUp: {
            count: Number,
            users: [{
                type: Schema.Types.ObjectId,
                ref: 'User',
            }]
        },
        voteDown: {
            count: Number,
            users: [{
                type: Schema.Types.ObjectId,
                ref: 'User'
            }]
        },
        bookmarkCount: Number, // 加入菜单
        viewCount: Number// 页面浏览次数
    }
});

RecipeSchema.methods.findSimilarMaterials = function (cb) {
    return this.model('Recipe').find({material: this.material}, cb);
};

mongoose.model('Recipe', RecipeSchema);