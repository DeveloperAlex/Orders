'use strict';
// Any memory leaks? https://egghead.io/lessons/node-js-managing-memory-and-garbage-collection-in-node-js
//var heapdump = require('heapdump');
// process.env.PORT is another way (but we have Prod & Dev both running on the same Ubuntu
// server - so using this instead (for now)).
var portNum = require('./server_port');
var express = require('express');
var app = express();
var expressJwt = require('express-jwt');
//var jwt = require('jsonwebtoken');  //npm install jsonwebtoken --save //Auth0 does this part - so its not needed (ie, post to /api/login - jwt.sign({username: postedUsername})).

var cors = require('cors');
var passwords = require('./src/passwords');
var path = require('path');
//var favicon = require('serve-favicon');
//var faker = require('faker'); //var user = faker.Helpers.userCard(); user.avatar = faker.Image.avatar();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware'); //https://www.npmjs.com/package/less-middleware  https://github.com/emberfeather/less.js-middleware

//var routes = require('./src/routes/index');
var apiRoutes = require('./src/routes/apiRoutes');
//var authRouter = require('./src/routes/authRoutes')(nav);
//var users = require('./routes/users');


// app.use(function (req, res, next) {
//     var host = req.headers.host;
//     //if (host.indexOf('localhost:8080') === -1 && host.indexOf('developeralex.com:8080') === -1) {
//     if (isEvil(req)) {
//         var fullUrl = req.method + ' ' + host + req.originalUrl;
//         console.log('Evil request: ' + fullUrl + ' on ' + new Date().toString());
//         res.send('');  //Bad request - stop processing it.
//     } else {
//         next();  //Good request - continue processing.
//     }
// });
// function isEvil(req){
//     var host = req.headers.host;
//     if (host.indexOf('localhost:8080') === -1 && host.indexOf('developeralex.com:8080') === -1) {
//         return true;
//     } else {
//         return false;
//     }
// }


// view engine setup
//app.set('views', './views');    //path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//Middleware (app.use):
//app.use(logger('dev'));  //TODO: Turn back on. Was too noisy in console.


//var authenticate = expressJwt({
//  secret: new Buffer(passwords.auth0.client_secret, 'base64'),
//  audience: passwords.auth0.client_id
//});
////app.use(expressJwt({secret: jwtSecret}).unless({ path:['/login'] }) );  //TODO: I think I like this better. //Adds user object if it can decode.
////app.use(authenticate.unless({ path:['/api/login'] }) );  //TODO: I think I like this better. //Adds user object if it can decode.
//app.use(authenticate.unless({
//  path: ['/api/SomethingNotNeedingAuth']
//}));


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

//var passport = require('passport');
//var session = require('express-session');
//app.use(session({secret: 'library'}));
////app.use(passport.initialize());
////app.use(passport.session());
//require('./src/config/passport')(app); //Instead of 2 above passport lines.

//app.use(require('stylus').middleware(path.join(__dirname, 'public')));  //https://github.com/stylus/stylus/blob/master/docs/compare.md
app.use(lessMiddleware(__dirname + '/public')); //Must come before "express.static".

//nginx now handles static files - this could be turned off (but I still need it for my local dev box - unless I setup nginx on it too).
//TODO: What happens to the LESS css files? Hmm - need Gulp to fix that perhaps. Fixed w/ Webstorm addin.
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
app.use('/api', apiRoutes);
//app.use('/Auth', authRouter);
//app.use('/secured', authenticate);
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
// app.use(function (err, req, res, next) {
//     if (!isEvil(req)) {
//         var err = new Error('Not Found');
//         err.status = 404;
//         //next(err);
//     }
// 
//     if (app.get('env') !== 'development' || isEvil(req)) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: {}
//         });
//     } else {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     }
// });


app.listen(portNum, function () {
  console.log('Express listening on port', this.address().port);
});

module.exports = app;