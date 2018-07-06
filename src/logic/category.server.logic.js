'use strict';

const {check, validationResult} = require('express-validator/check');
const {matchedData, sanitize} = require('express-validator/filter');


exports.checkName = check('name').exists().trim().not().isEmpty().withMessage('名称不能为空');


exports.validate = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(422).json({ errors: errors.mapped() });
        res.render('admin/error', {
            errors: errors.mapped(),
            message: '名称不能为空'
        });
    } else {
        next();
    }
}