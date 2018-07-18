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
    , flash = require('connect-flash')
    , passport = require('passport')
    , swig = require('swig-templates')
    , connect = require('connect')
    , errorhandler = require('errorhandler')
    , methodOverride = require('method-override')
    , multer = require('multer')
    , upload = multer()
    , sessionStore = new session.MemoryStore();

module.exports = function () {
    const app = express();

    app.use(favicon(path.join('./www', 'favicon.ico')));
    app.use(express.static(path.join('./www')));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        secret: config.sessionSecret,
        cookie: {maxAge: 60000, secure: false},
        resave: true,
        saveUninitialized: true,
        store: sessionStore
    }));

    app.engine('html', swig.renderFile);
    app.set('views', path.join('./view'));
    app.set('view engine', 'html');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    // **** Routes ****
    require('../router/web/index.server.router.web')(app);
    require('../router/web/recipe.server.router.web')(app);
    require('../router/web/user.server.router.web')(app);

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
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