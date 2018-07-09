'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.

const cookInfoSchema = new Schema({
    // 食谱 (ref)
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    },
    // 功效
    china_food_function: {
        type: [String],
        enum: ['疾病调理', '功能性调理', '脏腑调理', '人群膳食', '抵抗力', '防癌', '降血脂', '抗衰老', '减肥', '骨质疏松', '美容养颜'],
    },
    // 工艺
    craftwork: {
        type: String,
        enum: ['煎', '蒸', '煮', '炖', '红烧', '炸', '卤', '干锅', '火锅', '泡', '烤', '免考', '炒']
    },
    // 口味
    flavor: {
        type: String,
        enum: ['咸鲜味', '甜味', '酱香味', '奶香味', '甜味', '家常味']
    },
    // 难度
    difficulty: {
        type: Number,
        min: 0,
        max: 10
    },
    // 人数
    number_of_people: {
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
    }
});

module.exports = mongoose.model('CookInfo', cookInfoSchema);