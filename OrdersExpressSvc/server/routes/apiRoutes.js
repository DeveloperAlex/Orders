'use strict';

//TODO: Move code out of routes into controller. Or refactor this into separate api files for each endpoint grouping.
//var apiController = require('./src/controllers/apiController'); //This is relative path to file.

var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //Middleware that creates req.body from either json or url.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//var router = app.router;  //Deprecated

//var router = express.Router();
//var router = app.Routerrrr({
var router = express.Router({
  mergeParams: true
});

var _ = require('lodash');

////Check if user is logged in
//router.use(function(req, res, next){
//  if (!req.user) {
//    res.redirect('/login');
//  }
//  next();
//});

var passwords = require('../passwords');
var mongoose = require('mongoose'); //http://mongoosejs.com/docs/api.html
mongoose.set('debug', true);
var db = mongoose.connect(passwords.mongolab_com_orders, function(err) {  //https://mongolab.com/databases/orders
  if (err) {
    console.log('Mongoose connect failed. err= ' + err);
  }
});


//db.on('error', console.error.bind(console, 'mongoose connection error:'));
//db.once('open', function() {
//  console.log('mongoose connected (says apiRoutes.js)!');
//});


var Employee = require('../models/employeeModel.js');
var Menu = require('../models/menuModel.js');
var Order = require('../models/orderModel.js');


// http://expressjs.com/api.html#router.use
// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
  //if (true) {  //(‌‌req.originalUrl.indexOf('/api') > -1) {
  if (req.originalUrl.indexOf('/api') > -1) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
  } else {
    //next();
    ;  //Stop don't continue - if its not /api.
  }
});


///////////////////////////////////////////////////////////////////////////////////////////////////
// Token check
var expressJwt = require('express-jwt');  //https://github.com/auth0/express-jwt  https://www.npmjs.com/package/express-jwt

//TODO: Refactor below code to use that json file not in Git.
/*
app.use(
  expressJwt({
    secret: new Buffer('J25N8B6armBpIXmrTfXJv_x8tjF6Qky19jsJew5Y4XUlftdkTDZD4RggObS0mQyI', 'base64'),
    getToken: function fromHeaderOrQuerystring (req) {
      var token;
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
        try {
          jwt.verify(token, new Buffer('J25N8B6armBpIXmrTfXJv_x8tjF6Qky19jsJew5Y4XUlftdkTDZD4RggObS0mQyI', 'base64'));
        } catch(err) {
          res.send(401, 'bad token');
        }
        req.token = token;  //Supposedly req.user gets set by jwt.verify. //TODO: Remove this line if not used.
        return token;
      }
      return null;
    }

  })
    .unless({path: ['/ping']})
);
*/


/*
app.use(
  expressJwt({ secret: new Buffer('J25N8B6armBpIXmrTfXJv_x8tjF6Qky19jsJew5Y4XUlftdkTDZD4RggObS0mQyI', 'base64') })
  .unless({path: ['/ping']}));
*/


router.all('/*',
  expressJwt({ secret: new Buffer('J25N8B6armBpIXmrTfXJv_x8tjF6Qky19jsJew5Y4XUlftdkTDZD4RggObS0mQyI', 'base64') })
    .unless({path: ['/ping']})
);



/*
  // https://github.com/auth0/node-jsonwebtoken
  var jwt = require('jsonwebtoken');  //https://github.com/auth0/node-jsonwebtoken
  // invalid token - synchronous
  try {
    var decoded = jwt.verify(token, 'wrong-secret');
  } catch(err) {
    // err
  }
*/




///////////////////////////////////////////////////////////////////////////////////////////////////
// /api/login
// Not needed - isn't this done by Auth0?
//
;  //TODO: Add /api/auth/login POST endpoint to return token.  Or /api/token
; //Then check the token passed in & error out - if an invalid token passed in. To block any paths below getting hit.












///////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/me', function (req, res) { //TODO: Call this endpoint from the frontend.
  res.send(req.user); //user object is added to request by server.js's "app.use(authenticate.unless ..." (ie, expressJwt).
});

router.get('/ping', function(req, res) {
  res.json({pong: Date.now()});
});

///////////////////////////////////////////////////////////////////////////////////////////////////
/* GET home page. */
router.get('/', function (req, res) {
  var responseJson = {
    choices: 'employee, menu, order'
  };
  res.json(responseJson);
});


///////////////////////////////////////////////////////////////////////////////////////////////////
router.route('/employee')
  .post(function (req, res) {
    //var employee = new Employee(req.body);
    //Create a Document instance of a Model (which was created from a Schema).
    var employee = new Employee({
      user: req.body.user,  //|| 'user was na',
      pw: req.body.pw  //|| 'pw was na'
    });

    employee.save(function(err){  //TODO: .save is new mongoose code - need to test it. Yes, it works.
      if (err) {
        console.log('error', employee, err);
        res.sendStatus(500).send("error " + err);
      } else {
        console.log(employee);
        res.send(employee);
        //res.redirect(301, '/');  //We could redirect to the homepage. Yeah, but we're a restful service - so no.
      }
    });
  })

  .get(function (req, res) {
    var query = req.query;  // || {}; //Works: http://localhost:8181/api/employee?user=Anne
    //Employee.find(query, function (err, employees) {
    Employee.find(query).sort({user: 'asc'}).limit(100).exec(function (err, employees) {
      if (err) {
        res.status(500).send(err);
      } else {
        //res.json(employees[0]._doc);
        var result = [];
        _.forEach(employees, function(value, key) {
          result.push(value._doc);
        });
        res.json(result);
      }
    });
  });

//Works: http://localhost:8181/api/employee/2
router.route('/employee/:employeeId')
  .get(function (req, res) {
  Employee.findById(req.params.employeeId, function (err, employee) {
    if (err) {
      res.status(500).send(err);
    }
    if (employee) {
      res.json(employee._doc);
    } else {
      res.status(404).json({info: 'employee not found'});
    }
  });
});


router.route('/employee/:employeeId')
  .put(function (req, res) {
  Employee.findById(req.params.employeeId, function(err, employee) { //TODO: Use .findByIdAndUpdate instead (faster).
    if (err) {
      res.json({info: 'error during find employee', error: err});
    };
    if (employee) {
      _.merge(employee, req.body);
      employee.save(function(err) {
        if (err) {
          res.json({info: 'error during employee update', error: err});
        };
        res.json({info: 'employee updated successfully'});
      });
    } else {
      res.json({info: 'employee not found'});
    }
  });
  });


router.route('/employee/:_id')
  .delete(function (req, res) {
    Employee.findByIdAndRemove(req.params._id, function(err) {
      if (err) {
        res.json({info: 'error during remove employee', error: err});
      };
      res.json({info: 'employee removed successfully'}); //In real life we would never actually delete an employee.
    });
  });



;


///////////////////////////////////////////////////////////////////////////////////////////////////
//router.route('/menu').get(function (req, res) {
//  var query = req.query;
//  Menu.find(query, function (err, menu) {
//    if (err) {
//      res.status(500).send(err);
//    } else {
//      res.json(menu);
//    }
//  });
//});

//Much better than above Menu getter.
router.route('/menu').get(function (req, res) {
  var query = Menu.find();
  query.sort({ category: 'asc', title: 'asc' }).limit(100);

  query.exec(function(err, menu){
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(menu);
    }
  });
});

router.route('/menu/:menuId').get(function (req, res) {
  Menu.findById(req.params.menuId, function (err, menu) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(menu);
    }
  });
});


///////////////////////////////////////////////////////////////////////////////////////////////////
router.route('/order').get(function (req, res) {
  var query = req.query;
  //Order.find(query, function (err, order) {
  //.select({ name: 1, occupation: 1 })  //This will cause mongoose to rtn a subset of all of the fields available.
  //query.select('name occupation');  //Another mongoose docs example of how to rtn a subset of columns.
  //http://stackoverflow.com/questions/5825520/in-mongoose-how-do-i-sort-by-date-node-js //Nice explanation of choices.
  Order.find(query).sort({orderNum: 'desc'}).limit(100).exec(function (err, order) {
    //Employee.find(query).sort({user: 'asc'}).limit(100).exec(function (err, employees) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(order);
    }
  });
});

router.route('/order/:orderId').get(function (req, res) {
  Order.findById(req.params.orderId, function (err, order) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(order);
    }
  });
});


///////////////////////////////////////////////////////////////////////////////////////////////////
// https://github.com/simonholmes/mongoose-default-connection/blob/master/model/db.js
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection opened');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

//TODO: http://mongoosejs.com/docs/guide.html#indexes  //Improve indexing

//// If the Node process ends, close the Mongoose connection
//process.on('SIGINT', function () {
//    mongoose.connection.close(function () {
//        console.log('Mongoose default connection disconnected through app termination');
//        process.exit(0);
//    });
//});

//process.once('SIGUSR2', function () {
//    // https://github.com/remy/nodemon#controlling-shutdown-of-your-script
//    // http://www.benjiegillam.com/2011/08/node-js-clean-restart-and-faster-development-with-nodemon/
//    gracefulShutdown(function () {
//        console.log('gracefulShutdown');
//        process.kill(process.pid, 'SIGUSR2');
//    });
//});


function gracefulExit() {
  mongoose.connection.close(function () {
    //console.log('Mongoose connection closed because of app termination: SIGINT, SIGTERM, or SIGUSR2 (which nodemon sends on restart).');
    console.log('Mongoose connection closed because of app termination: SIGINT or SIGTERM.');
    process.exit(0);
  });
}
//process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit).on('SIGUSR2', gracefulExit);  // If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit); // If the Node process ends, close the Mongoose connection


// For nodemon restarts. Sadly this doesn't appear to be working. Despite code coming from here: https://github.com/remy/nodemon/blob/e9d85b2afd55604b416a65eefe2653c7b1af0907/README.md#controlling-shutdown-of-your-script
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through: ' + msg);
    callback();
  });
}


///////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;
