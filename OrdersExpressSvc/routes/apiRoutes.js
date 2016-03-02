'use strict';

//TODO: Move code out of routes into controller.
//var apiController = require('./src/controllers/apiController'); //This is relative path to file.

var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //Middleware that creates req.body from either json or url.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//var router = express.Router();
var router = express.Router({
  mergeParams: true
});

var passwords = require('../passwords');
var mongoose = require('mongoose'); //http://mongoosejs.com/docs/api.html
mongoose.set('debug', true);
var db = mongoose.connect(passwords.mongolab_com_orders); //https://mongolab.com/databases/orders

var Employee = require('../models/employeeModel.js');
var Menu = require('../models/menuModel.js');
var Order = require('../models/orderModel.js');


// http://expressjs.com/api.html#router.use
// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});


///////////////////////////////////////////////////////////////////////////////////////////////////
// /api/login
// Not needed - isn't this done by Auth0?
//


///////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/me', function (req, res) { //TODO: Call this endpoint from the frontend.
  res.send(req.user); //user object is added to request by server.js's "app.use(authenticate.unless ..." (ie, expressJwt).
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
    var employee = new Employee(req.body);
    console.log(employee);
    res.send(employee);

  })
  .get(function (req, res) {
    var query = req.query; //Works: http://localhost:8080/api/employee?user=Anne
    Employee.find(query, function (err, employee) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(employee);
      }
    });
  });

router.route('/employee/:employeeId').get(function (req, res) {
  Employee.findById(req.params.employeeId, function (err, employee) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employee);
    }
  });
});


///////////////////////////////////////////////////////////////////////////////////////////////////
router.route('/menu').get(function (req, res) {
  var query = req.query;
  Menu.find(query, function (err, menu) {
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
  Order.find(query, function (err, order) {
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