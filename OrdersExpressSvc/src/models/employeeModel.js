'use strict';
var mongoose = require('mongoose'); //http://mongoosejs.com/docs/api.html
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  //_id: { type: String }
  user: { type: String }
  ,pw: { type: String }
  ,createdOn: {type: Date, default: Date.now}

  //,admin: { type: Boolean, default: false }
});

module.exports = mongoose.model('Employee', employeeSchema);


//{
//    "_id": "2",
//    "user": "Anne",
//    "pw": "anne123"
//}