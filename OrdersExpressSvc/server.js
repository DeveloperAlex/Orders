"use strict";
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');  //https://www.npmjs.com/package/less-middleware  https://github.com/emberfeather/less.js-middleware

var routes = require('./routes/index');
var api = require('./routes/api');
//var users = require('./routes/users');

var app = express();
app.use(function (req, res, next) {
    //var host = req.headers.host;
    //if (host.indexOf('localhost:8080') === -1 && host.indexOf('developeralex.com:8080') === -1) {
    if (isEvil(req)) {
        var fullUrl = req.method + ' ' + host + req.originalUrl;
        console.log('Evil request: ' + fullUrl + ' on ' + new Date().toString());
        res.send('');  //Bad request - stop processing it.
    } else {
        next();  //Good request - continue processing.
    }
});

function isEvil(req){
    var host = req.headers.host;
    if (host.indexOf('localhost:8080') === -1 && host.indexOf('developeralex.com:8080') === -1) {
        return true;
    } else {
        return false;
    }
}


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(require('stylus').middleware(path.join(__dirname, 'public')));  //https://github.com/stylus/stylus/blob/master/docs/compare.md
app.use(lessMiddleware(__dirname + '/public'));  //Must come before "express.static".
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', api);
//app.use('/users', users);

//// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    //if (true) {
//    //    res.redirect('http://google.com');
//    //    //res.redirect(301, 'http://google.com');
//    //}
//    
//    if (!isEvil(req)) {
//        var err = new Error('Not Found');
//        err.status = 404;
//        next(err);
//    }
//});

//// development error handler - will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function (err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

// production error handler - no stacktraces leaked to user
app.use(function (err, req, res, next) {
    if (!isEvil(req)) {
        var err = new Error('Not Found');
        err.status = 404;
        //next(err);
    }

    if (app.get('env') !== 'development' || isEvil(req)) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    } else {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    }
});


app.listen(8080, function () {
    console.log('Express listening on port', this.address().port);
});

module.exports = app;
