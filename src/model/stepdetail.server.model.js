'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.

const stepDetailSchema = new Schema({
    // 食谱 (ref)
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    },
    // 解说
    summary: String,
    // 描述
    description: String,
    // 步骤
    steps: {
        type: [{
                // 步骤描述
                word: String,
                // 步骤图片
                image_path: String,
                // 步骤顺序
                sequence: Number
            }]
    },
    // 成品图
    complete_image_path: [String],
    // 烹饪技巧
    tips: String,
    // 总结
    conclusion: String,
});

module.exports = mongoose.model('StepDetail', stepDetailSchema);