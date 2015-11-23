"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://ordersUser:o1r2d3e4r5s6U7s8e9r@ds037283.mongolab.com:37283/orders');
var Employee = require('../models/employeeModel.js');


/* GET home page. */
router.get('/', function (req, res) {
    var responseJson = { hello: "This is my api" };
    res.json(responseJson);
});

router.get('/employees', function (req, res) {
    var query = {};
    query = req.query;  //Works: http://localhost:1337/api/employees?user=Anne
    Employee.find(query, function (err, employees) {
        if (err) {
            //console.log(err);
            res.status(500).send(err);
        } else {
            res.json(employees);
        }
    });

});

module.exports = router;
