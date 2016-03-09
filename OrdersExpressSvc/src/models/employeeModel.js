'use strict';
var mongoose = require('mongoose'); //http://mongoosejs.com/docs/api.html
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  //_id: { type: String }
  user: { type: String, required: true }
  ,pw: { type: String, required: true }
  //,createdOn: {type: Date, required: true, default: Date.now}  //Really should be UTC date.

  //,admin: { type: Boolean, default: false }
}, {timestamps: true});
//employeeSchema.set('timestamps', true);


//module.exports = mongoose.model('Employee', employeeSchema);
//http://mongoosejs.com/docs/guide.html#options
var employeeModel = mongoose.model('Employee', employeeSchema);

employeeModel.on('index', function (error) {
  /* If error is truthy, index build failed */
  if (error) {
    console.log('employeeModel index error', error);
  } else {
    console.log('employeeModel index success');
  }
});

employeeModel.schema.options.emitIndexErrors; // true  //http://mongoosejs.com/docs/guide.html#emitIndexErrors
employeeModel.on('error', function(error) {
  // gets an error whenever index build fails
  console.log('employeeModel index detail error', error);
});


module.exports = employeeModel;



//{
//    "_id": "2",
//    "user": "Anne",
//    "pw": "anne123"
//}
