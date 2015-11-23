var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //res.render('index', { title: 'Express' });
    var responseJson = { hello: "This is my api" };
    res.json(responseJson);
});

module.exports = router;
