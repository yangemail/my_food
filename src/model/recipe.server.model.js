'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

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

    // begin of --美食类型
    food_style: {
        // 国家
        country: {
            type: String,
            enum: ['中国', '韩国料理', '日本料理', '西餐面点', '法国', '意大利', '德国', '美国', '东南亚菜', '墨西哥菜', '澳大利亚菜', '印度', '非洲', '其他国家'],
            index: true,
        },
        // 适合中国菜谱
        china_food_district: {
            type: String,
            enum: ['川菜', '湘菜', '粤菜', '东北菜', '鲁菜', '浙菜', '苏菜', '清真菜', '闽菜', '沪菜', '京菜', '湖北菜', '徽菜', '豫菜', '西北菜', '云贵菜', '江西菜', '山西菜', '广西菜', '港台菜', '小吃', '其它菜'],
        },
        // 中国各地小吃
        china_local_snake: {
            type: String,
            enum: ['四川小吃', '广东小吃', '北京小吃', '陕西小吃', '山东小吃', '山西小吃', '湖南小吃', '河南小吃', '上海小吃', '江苏小吃', '湖北小吃', '重庆小吃', '天津小吃', '河北小吃', '浙江小吃', '新疆小吃', '江西小吃', '福建小吃', '广西小吃', '云南小吃', '辽宁小吃', '吉林小吃', '贵州小吃', '安徽小吃', '台湾小吃', '甘肃小吃', '香港小吃', '蒙古小吃', '宁夏小吃', '青海小吃', '海南小吃', '西藏小吃', '成都小吃', '黑龙江小吃', '其它地区小吃'],
        },
        // 中国菜谱类型
        china_food_style2: {
            type: String,
            enum: ['家常菜', '私家菜', '凉菜', '海鲜', '热菜', '汤粥', '素食', '酱料蘸料', '微波炉', '火锅底料', '甜品点心', '糕点主食', '干果制作', '卤酱', '时尚饮品', '小吃', '烧烤',]
        }
        // 适合国外菜谱
        foreign_food_order: {
            type: String,
            enum: ['头盘', '汤品', '副菜', '主菜', '主食', '饮品', '甜品'],
        },
        // 家常菜谱（中国，国外）
        foreign_food_type: {
            type: [String],
            enum: ['家常菜', '私家菜', '凉菜', '海鲜', '热菜', '汤粥', '素食', '酱料蘸料', '微波炉', '甜品点心', '糕点主食', '干果制作', '时尚饮品', '小吃', '烧烤', '蛋糕面包', '饼干配方', '甜品点心']
        },
        // 每日三餐（中国，国外）
        food_time: {
            type: [String],
            enum: ['早餐', '午餐', '晚餐', '午休', '下午茶', '夜宵'],
        },
        // 适合人群人群
        food_comfort_people: {
            type: [String],
            enum: ['老年人', '产妇', '孕妇', '产后', '宝宝食谱', '婴儿食谱', '成人'],
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
            enum: ['煎', '蒸', '煮', '炖', '红烧', '炸', '卤', '干锅', '火锅', '泡', '烤', '免考', '炒'],
        },
        // 口味
        flavor: {
            type: String,
            enum: ['咸鲜味', '甜味', '酱香味', '奶香味', '甜味', '家常味'],
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