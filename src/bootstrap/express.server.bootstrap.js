'use strict';

const config = require('../config/config.server.config')
    , express = require('express')
    , path = require('path')
    , favicon = require('serve-favicon')
    , morgan = require('morgan')
    , bodyParser = require('body-parser')
    , compress = require('compression')
    , logger = require('../middleware/logger.server.middleware')
    , session = require('express-session')
    , passport = require('passport')
    , flash = require('connect-flash')
    , swig = require('swig-templates')
    , connect = require('connect')
    , errorhandler = require('errorhandler');
// const methodOverride = require('method-override');

module.exports = function () {
    const app = express();

    // ------ view engine setup ------
    app.engine('html', swig.renderFile);
    app.set('views', path.join('./view'));
    app.set('view engine', 'html');
    app.use(favicon(path.join('./www', 'favicon.ico')));
    app.use(session({
        secret: config.sessionSecret,
        cookie: {maxAge: 24 * 60 * 60 * 1000, secure: true},
        resave: false, saveUninitialized: true,
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

    if (process.env.NODE_ENV === 'development') {
        console.log('**********')
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