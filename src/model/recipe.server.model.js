'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

// If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema, the type assigned is Date.

const recipeSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    material: {
        type: [String],
        index: true,
    },
    body: String,
    level: Number,
    sequence: Number,
    comments: [{
        body: String,
        author: Schema.Types.ObjectId,
        date: Date,
    }],
    score: Number,
    date: {
        type: Date, default: Date.now
    },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    },
    fans: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
});

recipeSchema.methods.findSimilarMaterials = function (cb) {
    return this.model('Recipe').find({material: this.material}, cb);
};

recipeSchema.pre('update', function () {
    this.update({}, {$set: {updatedAt: new Date()}});
});

module.exports = mongoose.model('Recipe', recipeSchema);