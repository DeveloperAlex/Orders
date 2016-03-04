'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/help', function (req, res) {
  res.render('help.html', {
    title: 'Help'
  });
});

module.exports = router;