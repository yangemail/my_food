'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: String,
    author: ObjectId,
    body: String,
    level: Number,
    sequence: Number,
    comments: [{body: String, date: Date}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});


CategorySchema.pre('update', function () {
    this.update({}, {$set: {updatedAt: new Date()}});
});

module.exports = mongoose.model('Category', CategorySchema);