"use strict";
var express = require('express');
var router = express.Router();
var passwords = require('../passwords');
var mongoose = require('mongoose');  //https://mongolab.com/databases/orders
var db = mongoose.connect(passwords.mongolab_com_orders);

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


/* GET home page. */
router.get('/', function (req, res) {
    var responseJson = { choices: "employee, menu, order" };
    res.json(responseJson);
});

router.get('/employee', function (req, res) {
    var query = req.query;  //Works: http://localhost:1337/api/employee?user=Anne
    Employee.find(query, function (err, employee) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(employee);
        }
    });

});


router.get('/menu', function (req, res) {
    var query = req.query;
    Menu.find(query, function (err, menu) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(menu);
        }
    });

});


router.get('/order', function (req, res) {
    var query = req.query;
    Order.find(query, function (err, order) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(order);
        }
    });

});


module.exports = router;
