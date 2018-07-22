'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const EquipmentSchema = new Schema({
    category: String,
    type: String,
    name: String,
    imagePath: String,
    description: String,
    sequence: Number,
    sellerInfo: [
        {
            name: String,
            url: String,
            description: String,
            price: Number
        }
    ],
});

mongoose.model('Equipment', EquipmentSchema);