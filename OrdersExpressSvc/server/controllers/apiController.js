//Let's streamline the apiRoutes code by having it call into this controller.  //TODO

//var mongodb = require('mongodb').MongoClient;
//var objectId = require('mongodb').ObjectID;

var apiController = function () {

  var middleware = function (req, res, next) {
    //if (!req.user) {
    //res.redirect('/');
    //}
    next();
  };

  var getIndex = function (req, res) {

  };

  var getById = function (req, res) {

  };

  return {
    getIndex: getIndex,
    getById: getById,
    middleware: middleware
  };
};

module.exports = apiController;