'use strict';

// 加载数据库模块

const mongoose = require('mongoose');
const Ingredient = mongoose.model('Ingredient');

function initIngredient() {
// Drop collection
    Ingredient.remove({}, function (err) {
        console.log('-- collection removed --');
    });

    const ingredients = [];
    // 腌咸制品
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '火腿'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '香肠'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '培根'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '腊肉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '酸菜'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '泡菜'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '肉松'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '梅干菜'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '雪里蕻'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '榨菜'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '辣白菜'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '笋干'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '鱼丸'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '橄榄菜'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '咸菜'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '萝卜干'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '咸肉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '酸豇豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '肉丸'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '午餐肉'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '蟹棒'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '叉烧肉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '芽菜'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '纳豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '大头菜'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '酸笋'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '木鱼花'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '冬菜'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '玉兰片'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '泡萝卜'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '咸黄瓜'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '叉烧'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '酸豆角'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '酸黄瓜'})); // new
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '腌咸制品', name: '鱼豆腐'})); // new
    //
    // 干果类
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '芝麻'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '花生'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '杏仁'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '红豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '枣'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '核桃'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '板栗'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '蔓越莓'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '绿豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '黄豆'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '薏米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '葡萄干'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '莲子'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '橄榄'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '黑豆'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '蜜豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '芸豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '腰果'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '桃胶'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '乌梅'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '松仁'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '无花果'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '银杏果'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '话梅'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '榛子'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '鹰嘴豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '罗汉果'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '芡实'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '开心果'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '干山楂'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '南瓜子'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '瓜子仁'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '眉豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '红腰豆'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '松子'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '山楂干'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '干果类', name: '白果'}));
    //
    // 米面类
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '面粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '面条'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '大米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '高筋面粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '意大利面'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '糯米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '低筋面粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '年糕'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '西米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '糯米粉'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '粉丝'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '燕麦'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '米粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '酒酿'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '燕麦片'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '乌冬面'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '小米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '玉米面'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '全麦粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '黑米'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '魔芋'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '方便面'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '粉条'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '米线'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '荞麦面'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '油条'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '黄豆面'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '消化饼干'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '面筋'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '粘米粉'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '凉粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '糙米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '河粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '紫米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '烤麸'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '小麦胚芽'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '澄面'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '粉皮'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '蕨根粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '藕粉'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '红曲米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '莜面'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '黄米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '荞麦'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '大麦'}));
    //
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '高粱米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '红米'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '澄粉'}));
    ingredients.push(new Ingredient({category: '米面干果腌咸', type: '米面类', name: '黄豆粉'}));
    //
    // 豆制品
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '豆腐'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '香干'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '豆渣'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '千张'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '腐竹'}));
    //
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '素鸡'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '油豆皮'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '豆干'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '豆腐皮'}));
    //
    // 奶制品
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '牛奶'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '黄油'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '巧克力'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '奶油'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '奶酪'}));
    //
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '酸奶'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '黑巧克力'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '淡奶油'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '奶油奶酪'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '奶制品', name: '炼乳'}));
    //
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '奶粉'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '马苏里拉奶酪'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '白巧克力'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '白酸奶油'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '酥油'}));
    //
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '芝士'}));
    //
    // 蛋类
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '蛋类', name: '鸡蛋'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '蛋类', name: '咸蛋'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '蛋类', name: '皮蛋'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '蛋类', name: '鹌鹑蛋'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '蛋类', name: '鸭蛋'}));
    //
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '咸鸭蛋'}));
    ingredients.push(new Ingredient({category: '蛋奶豆制品', type: '豆制品', name: '咸鸡蛋'})); // new
    //
    // 螃蟹
    ingredients.push(new Ingredient({category: '水产', type: '螃蟹', name: '梭子蟹'}));
    ingredients.push(new Ingredient({category: '水产', type: '螃蟹', name: '大闸蟹'}));
    ingredients.push(new Ingredient({category: '水产', type: '螃蟹', name: '蟹肉'}));
    ingredients.push(new Ingredient({category: '水产', type: '螃蟹', name: '蟹黄'}));
    ingredients.push(new Ingredient({category: '水产', type: '螃蟹', name: '雪蟹'})); // new
    ingredients.push(new Ingredient({category: '水产', type: '螃蟹', name: '雪蟹腿'})); // new
    ingredients.push(new Ingredient({category: '水产', type: '螃蟹', name: '皇帝蟹'})); // new
    ingredients.push(new Ingredient({category: '水产', type: '螃蟹', name: '海蟹'})); // new
    //
    // 贝
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '蛤蜊'}));
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '干贝'}));
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '鲍鱼'}));
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '扇贝'}));
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '牡蛎'}));
    //
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '青口'}));
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '蛏子'}));
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '鲜贝'}));
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '北极贝'}));
    ingredients.push(new Ingredient({category: '水产', type: '贝', name: '河蚌'}));
    //
    // 虾
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '虾仁'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '海米'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '虾皮'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '明虾'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '基围虾'}));
    //
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '龙虾'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '小龙虾'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '河虾'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '海虾'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '皮皮虾'}));
    //
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '北极虾'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '虾干'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '青虾'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '草虾'}));
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '海白虾'}));
    //
    ingredients.push(new Ingredient({category: '水产', type: '虾', name: '虾米'}));
    //
    // 鱼
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '海水鱼'}));
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '淡水鱼'}));
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '鱼头'}));
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '鱼干'}));
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '鱼籽'}));
    //
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '鱼肚'}));
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '黄花鱼'})); // new
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '带鱼'})); // new
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '多宝鱼'})); // new
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '胖头鱼'})); // new
    //
    ingredients.push(new Ingredient({category: '水产', type: '鱼', name: '鲤鱼'})); // new
    //
    // 猪
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪肉'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '排骨'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪肉末'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '五花肉'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪蹄'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '瘦肉'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '里脊'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪肝'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪排'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪肚'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪皮'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪骨'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '肥肠'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪油'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪腰'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪耳朵'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪心'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪血'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪肺'}));
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '肉末'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '猪', name: '猪脑'})); // new
    //
    // 鸡
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '鸡翅'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '鸡胸'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '鸡腿'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '鸡爪'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '鸡肉'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '乌鸡'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '鸡胗'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '土鸡'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '仔鸡'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '三黄鸡'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '鸡肝'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '老母鸡'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '鸡心'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '柴鸡'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸡', name: '童子鸡'}));
    //
    // 牛
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛肉'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛腩'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛排'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '肥牛'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛里脊'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛腱'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛尾'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛肉末'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛筋'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛百叶'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛骨'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛', name: '牛肉馅'}));
    //
    // 羊
    ingredients.push(new Ingredient({category: '肉类', type: '羊', name: '羊肉'}));
    ingredients.push(new Ingredient({category: '肉类', type: '羊', name: '羊排'}));
    ingredients.push(new Ingredient({category: '肉类', type: '羊', name: '羊腿'}));
    ingredients.push(new Ingredient({category: '肉类', type: '羊', name: '羊肉片'}));
    ingredients.push(new Ingredient({category: '肉类', type: '羊', name: '羊蝎子'}));
    //
    // 鸭
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭腿'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭肉'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '老鸭'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭胗'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭血'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭掌'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭翅'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭舌'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭肠'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭脖'}));
    //
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭肝'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鸭', name: '鸭爪'}));
    //
    // 其它
    ingredients.push(new Ingredient({category: '肉类', type: '鸽子', name: '鸽子'}));
    ingredients.push(new Ingredient({category: '肉类', type: '牛蛙', name: '牛蛙'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鹅', name: '鹅'}));
    ingredients.push(new Ingredient({category: '肉类', type: '兔', name: '兔肉'}));
    ingredients.push(new Ingredient({category: '肉类', type: '雪蛤', name: '雪蛤'}));
    ingredients.push(new Ingredient({category: '肉类', type: '田鸡', name: '田鸡'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鹌鹑', name: '鹌鹑'}));
    ingredients.push(new Ingredient({category: '肉类', type: '火鸡', name: '火鸡'}));
    ingredients.push(new Ingredient({category: '肉类', type: '驴肉', name: '驴肉'}));
    ingredients.push(new Ingredient({category: '肉类', type: '鹿肉', name: '鹿肉'}));
    //
    // 果实类蔬菜
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '彩椒'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '番茄'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '南瓜'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '玉米'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '茄子'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '黄瓜'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '豇豆'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '青椒'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '苦瓜'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '冬瓜'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '丝瓜'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '秋葵'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '西葫芦'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '毛豆'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '豌豆'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '四季豆'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '荷兰豆'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '蚕豆'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '圣女果'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '扁豆'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '刀豆'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '瓠瓜'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '玉米笋'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '果实类蔬菜', name: '西红柿'}));
    //
    // 时令水果
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '柠檬'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '椰子'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '草莓'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '橙'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '牛油果'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '木瓜'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '山楂'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '蓝莓'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '西瓜'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '柚子'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '火龙果'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '樱桃'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '榴莲'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '西柚'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '桃'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '葡萄'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '金橘'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '黄桃'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '百香果'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '杨梅'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '桔子'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '荔枝'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '无花果'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '石榴'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '杏子'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '桑葚'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '哈密瓜'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '柿子'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '李子'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '青梅'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '枇杷'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '香瓜'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '甘蔗'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '覆盆子'}));
    //
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '杨桃'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '橘子'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '金桔'}));
    ingredients.push(new Ingredient({category: '蔬菜水果', type: '水果', name: '杏'}));

    ingredients.forEach(function (item) {
        item.save(function (err) {
            if (err) {
                console.log(err);
            }
            console.log('-- save --');
        });
    });
}

module.exports = {initIngredient,};
