'use strict';
var mongoose = require('mongoose'); //http://mongoosejs.com/docs/api.html
var Schema = mongoose.Schema;

var passwordValidator = [
  function(val){
    return (val.trim().length >= 3);  //We can add a regex later.
  },
  'Password must be at least 3 characters long'
];

//var requiredStringValidator = [   //trim: true takes care of this.
//  function(val) {
//    return (val.trim().length > 0)
//  },
//  '{PATH} cannot be empty'
//];

var employeeSchema = new Schema({
  //_id: { type: String }
  user: { type: String, trim: true, required: true, validate: requiredStringValidator }
  ,pw: { type: String, trim: true, required: true, validate: passwordValidator }
  //,createdOn: {type: Date, required: true, default: Date.now}  //Really should be UTC date.

  //,admin: { type: Boolean, default: false }
}, {timestamps: true, capped: 1024});
//employeeSchema.set('timestamps', true);
//https://www.npmjs.com/package/mongoose-timestamp

employeeSchema.pre('validate', function(next) {  //http://mongoosejs.com/docs/api.html#model_Model-save
  console.log('About to save employee');  //Added in case I want to debug/inspect "this".
  next();
});

employeeSchema.pre('save', function(next) {  //http://mongoosejs.com/docs/middleware.html
  console.log('About to save employee');  //Added in case I want to debug/inspect "this".
  next();
});



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
