'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderModel = new Schema({
  _id: {
    type: String
  },
  server: {
    type: String
  },
  orderNum: {
    type: String
  },
  orderTime: {
    type: Date
  },
  items: {
    type: {
      food: String,
      quantity: String
    }
  }
});


module.exports = mongoose.model('Order', orderModel);



/*
{
    "_id": {
        "$oid": "561506f3e4b04bc95068bbae"
    },
    "server": "Anne",
    "orderNum": "25",
    "orderTime": "javascript datetime thingy",
    "items": [
        {
            "food": "hamburger",
            "quantity": "2"
        },
        {
            "food": "hotdog",
            "quantity": "3"
        },
        {
            "food": "fries",
            "quantity": "2"
        },
        {
            "food": "diet coke",
            "quantity": "5"
        }
    ]
}
*/