'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.

const recipeSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    image_path: {
        type: String,
        require: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [{
        body: String,
        author: Schema.Types.ObjectId,
        date: Date,
    }],
    // 星级 - 仿Amazon
    stars: Number,
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    },

    // 用料（主料）
    major_material: {
        type: [{
            material_image_path: String,
            name: String,
            num: Number,
            unit: String
        }],
    },
    // 用料 （辅料）
    sub_material: {
        type: [{
            material_image_path: String,
            name: String,
            num: Number,
            unit: String
        }],
    },

    // 中国
    // 家常菜谱
    china_food_type: {
        type: [String],
        enum: ['家常菜', '私家菜', '凉菜', '海鲜', '热菜', '汤粥', '素食', '酱料蘸料', '微波炉', '火锅底料', '甜品点心', '糕点主食', '干果制作', '卤酱', '时尚饮品'],
    },
    china_food_time: {
        type: [String],
        enum: ['早餐', '午餐', '晚餐', '下午茶', '夜宵'],
    },
    china_food_people: {
        type: [String],
        enum: ['老年人', '产妇', '孕妇', '宝宝食谱', '婴儿食谱'],
    },
    china_food_function: {
        type: [String],
        enum: ['疾病调理', '功能性调理', '脏腑调理', '人群膳食'],
    },
    china_food_style: {
        type: String,
        enum: ['川菜', '湘菜', '粤菜', '东北菜', '鲁菜', '浙菜', '苏菜', '清真菜', '闽菜', '沪菜', '京菜', '湖北菜', '徽菜', '豫菜', '西北菜', '云贵菜', '江西菜', '山西菜', '广西菜', '港台菜', '其它菜'],
    },
    china_local_snake: {
        type: String,
        enum: ['四川小吃', '广东小吃', '北京小吃', '陕西小吃', '山东小吃', '山西小吃', '湖南小吃', '河南小吃', '上海小吃', '江苏小吃', '湖北小吃', '重庆小吃', '天津小吃', '河北小吃', '浙江小吃', '新疆小吃', '江西小吃', '福建小吃', '广西小吃', '云南小吃', '辽宁小吃', '吉林小吃', '贵州小吃', '安徽小吃', '台湾小吃', '甘肃小吃', '香港小吃', '蒙古小吃', '宁夏小吃', '青海小吃', '海南小吃', '西藏小吃', '成都小吃', '黑龙江小吃'],
    },
    china_bake_style: {
        type: String,
        enum: ['蛋糕面包','饼干配方','甜品点心'],
    },

    // 外国
    foreign_food_country: {
        type: String,
        enum: ['韩国料理', '日本料理', '西餐面点', '法国菜', '意大利餐', '美国家常菜', '东南亚菜', '墨西哥菜', '澳大利亚菜', '印度', '其他国家']
    },
    foreign_food_order: {
        type: String,
        enum: ['餐前', '主菜', '主食', '汤品', '饮品甜点', '小吃']
    }
});

recipeSchema.methods.findSimilarMaterials = function (cb) {
    return this.model('Recipe').find({material: this.material}, cb);
};

// recipeSchema.pre('update', function () {
//     this.update({}, {$set: {updatedAt: new Date()}});
// });

module.exports = mongoose.model('Recipe', recipeSchema);