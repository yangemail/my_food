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
    new_media: {type: String},
    // 作者
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    //来源
    source: {type: String},
    // begin of -- 美食类型 -----
    food_style: {
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
    cook_info: {
        // 功效
        food_function: {
            type: [String],
            enum: ['疾病调理', '功能性调理', '脏腑调理', '人群膳食', '抵抗力', '防癌', '降血脂', '抗衰老', '减肥', '骨质疏松', '美容养颜'],
        },
        // 工艺
        craftwork: {
            type: String,
            enum: ['煎', '蒸', '煮', '炖', '红烧', '炸', '卤', '干锅', '火锅', '泡', '烤', '免烤', '炒'],
        },
        // 口味
        flavor: {
            type: String,
            enum: ['咸鲜', '甜', '酱香', '奶香', '甜', '家常', '辣', '咖喱', '糖醋', '蒜香', '酸甜', '孜然', '鱼香', '五香', '清淡'],
        },
        // 难度
        difficulty: {
            type: Number,
            min: 0,
            max: 10
        },
        // 人数
        servings_of_people: {
            type: Number,
            min: 0,
            max: 10
        },
        // 准备时间
        prepare_time: {
            type: Number,
            min: 0
        },
        // 烹饪时间
        cook_time: {
            type: Number,
            min: 0
        },
    },
    // end of 菜品细节
    nutrition_information: {
        serving_size: String,
        nutrition_facts: [{
            name: String,
            contains: String,
            percentage: Number,
        }],
        daily_value: [{
            name: String,
            contains: String,
            percentage: Number,
        }],
        exchanges: String,
        comments: String,
        links: [String],
    },
    // 用料
    ingredient: {
        // 用料（主料）
        major: {
            type: [{
                material_image_path: String,
                name: {
                    type: String,
                    index: true
                },
                num: Number,
                unit: String,
                links: [String]
            }],
        },
        // 用料 （辅料）
        sub: {
            type: [{
                material_image_path: String,
                name: String,
                num: Number,
                unit: String,
                links: [String]
            }],
        }
    },


    // begin of 菜谱细节 -----
    // 主图片
    title_image_path: {
        type: String,
    },
    //摘要
    summary: {type: String},
    description: {
        type: String
    },
    steps: [{
        image_path: String,
        step_desc: String,
        sequence: Number
    }],
    complete_pics: [String],
    export_tips: String,
    conclusion: String,
    // end of 菜谱细节

    // 菜谱评论
    comments: [{
        // 评论人
        post_author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        // 星级
        post_stars: Number,
        // 评论类型
        post_type: {
            type: String,
            require: true,
            enum: ['随意说说', '问题求解'],
            default: '随意说说'
        },
        // 评论
        post_body: String,
        // 评论日期
        post_date: Date,
        // 评论图片
        post_completed_sample_image_path: [String],
        // 评论赞同
        post_helpful: Number,

        // 回复
        reply: [{
            // 回复作者
            reply_author: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            // 回复内容
            reply_body: String,
            // 回复日期
            reply_date: Date,
            // 回复图片
            post_completed_sample_image_path: [String],
            // 回复赞同
            reply_helpful: Number,
        }],
    }],
    // 由于某些原因，暂时不显示
    hidden: {
        type: Boolean,
        default: false
    },
    //是否草稿 - 草稿
    is_draft: {type: Boolean},
    //是否有效 - 通过审核
    is_active: {type: Boolean, default: false},
    meta: {
        stars: {
            type: Number,
        },// 星级 - 仿Amazon
        votes: Number,
        bookmarked: Number,
        view_count: {// 页面浏览次数
            type: Number,
            default: 0
        },
    },
    // 创建日期: createdAt
    createdAt: {
        type: Date,
        default: Date.now
    },
});

RecipeSchema.methods.findSimilarMaterials = function (cb) {
    return this.model('Recipe').find({material: this.material}, cb);
};

mongoose.model('Recipe', RecipeSchema);