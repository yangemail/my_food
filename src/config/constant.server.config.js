const path = require('path')
    , foodStyle = require('./prop/foodStyle');

module.exports = {
    PROJECT_ROOT_PATH: path.dirname(require.main.filename),
    DATASET_COUNTRY: foodStyle.country,
    DATASET_CHINA_LOCAL_CUISINE: foodStyle.chinaLocalCuisine,
    DATASET_CHINA_LOCAL_SNAKE: foodStyle.chinaLocalSnake,
    DATASET_FOOD_TIME: foodStyle.foodTime,
    DATASET_FOOD_CONFORT_PEOPLE: foodStyle.foodComfortPeople,
    DATASET_FOOD_SPECIAL_EVENT: foodStyle.foodSpecialEvent,
    DATASET_FOOD_SPECIAL_EVENT_WESTERN_COUNTRY: foodStyle.foodSpecialEvent.westernCountry,
    DATASET_FOOD_SPECIAL_EVENT_CHINA: foodStyle.foodSpecialEvent.china,
    DATASET_CHINA_FOOD_STYLE: foodStyle.chinaFoodStyle,
    DATASET_FOREIGN_FOOD_ORDER: foodStyle.foreignFoodOrder,
    DATASET_SERVE_TYPE:foodStyle.serveType,
};