'use strict';

const config = require('../config/config.server.config');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const morgan = require('morgan');

// const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const compress = require('compression');

const logger = require('../middleware/logger.server.middleware');
// const i18n = require('./i18n');
const passport = require('passport');
const flash = require('connect-flash');
// const methodOverride = require('method-override');

const swig = require('swig-templates');

var connect = require('connect')
var errorhandler = require('errorhandler')


module.exports = function () {
    const app = express();

    // ------ view engine setup ------
    app.engine('html', swig.renderFile);
    app.set('views', path.join('./view'));
    app.set('view engine', 'html');
    app.use(favicon(path.join('./www', 'favicon.ico')));
    app.use(session({
        secret: config.sessionSecret, cookie: {maxAge: 24 * 60 * 60 * 1000},
        resave: true, saveUninitialized: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(express.static(path.join('./www')));
    // app.use(flash());
    // app.use(passport.initialize());
    // app.use(passport.session());

    // **** Routes ****
    require('../router/api.server.router')(app);
    require('../router/admin.server.router')(app);
    // require('../app/routes/locale.server.routes')(app);
    // require('../app/routes/auth.server.routes')(app);
    // require('../app/routes/ue.server.routes')(app);

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
        // 在开发过程中，需要取消模板缓存
        swig.setDefaults({cache: false});
        swig.invalidateCache();
        // only use in development
        app.use(errorhandler())
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error();
        err.status = 404;
        next(err);
    });

    // error handlers
    app.use(function (err, req, res, next) {
        var code = err.status || 500;
        var message = code === 404 ? "请求的页面已失联~系统已自动记录该错误。" : "服务器出错了~系统已自动记录该错误。";
        res.status(code);
        logger.errLogger(req, err);
        res.render('./share/error', {
            code: code,
            message: message
        });
    });

    return app;
};