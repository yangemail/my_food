'use strict';

const path = require('path')
    , cookInfo = require('./prop/cookInfo');

module.exports = {
    PROJECT_ROOT_PATH: path.dirname(require.main.filename),
    DATASET_COUNTRY: cookInfo.country,
    DATASET_CHINA_LOCAL_CUISINE: cookInfo.chinaLocalCuisine,
    DATASET_CHINA_LOCAL_SNAKE: cookInfo.chinaLocalSnake,
    DATASET_FOOD_TIME: cookInfo.foodTime,
    DATASET_FOOD_CONFORT_PEOPLE: cookInfo.foodComfortPeople,
    DATASET_FOOD_SPECIAL_EVENT: cookInfo.foodSpecialEvent,
    DATASET_FOOD_SPECIAL_EVENT_WESTERN_COUNTRY: cookInfo.foodSpecialEvent.westernCountry,
    DATASET_FOOD_SPECIAL_EVENT_CHINA: cookInfo.foodSpecialEvent.china,
    DATASET_FOREIGN_FOOD_ORDER: cookInfo.foreignFoodOrder,
    DATASET_SERVE_TYPE:cookInfo.serveType,
    DATASET_CRAFTWORK: cookInfo.craftwork,
    DATASET_FLAVOR: cookInfo.flavor,
    DATASET_DIFFICULTY: cookInfo.difficulty,
};