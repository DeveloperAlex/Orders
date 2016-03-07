'use strict';
var mongoose = require('mongoose'); //http://mongoosejs.com/docs/api.html
var Schema = mongoose.Schema;

var employeeModel = new Schema({
  _id: {
    type: String
  }
  ,user: { type: String }
  ,pw: { type: String }
  //,admin: { type: Boolean, default: false }
});

module.exports = mongoose.model('Employee', employeeModel);


//{
//    "_id": "2",
//    "user": "Anne",
//    "pw": "anne123"
//}