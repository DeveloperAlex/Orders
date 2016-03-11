'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuSchema = new Schema({
  //_id: {type: String},
  mealtime: { type: String, trim: true, required: true, default: 'lunch', enum: ['breakfast', 'lunch', 'dinner'] },
  items: {
    type: {
      category: { type: String, trim: true, required: true, default: 'food'},
      title: { type: String, trim: true, required: true },
      price: { type: Number, required: true , min: 0 },
      prepTimeInSec: { type: Number, default: 10 }  //Prep time is in seconds
    }
  }
  //items: { type: Object }
}, {timestamps: true});

module.exports = mongoose.model('Menu', menuSchema);



// {
//    "_id": {
//        "$oid": "56150476e4b04bc95068bb20"
//    },
//    "mealtime": "all day",
//    "items": [
//        {
//            "category": "food",
//            "title": "hamburger",
//            "price": "3.00",
//            "prepTime": "40"
//        },
//        {
//            "category": "food",
//            "title": "hotdog",
//            "price": "2.00",
//            "prepTime": "20"
//        },
//        {
//            "category": "food",
//            "title": "fries",
//            "price": "1.25",
//            "prepTime": "10"
//        },
//        {
//            "category": "food",
//            "title": "onion rings",
//            "price": "1.50",
//            "prepTime": "10"
//        },
//        {
//            "category": "beverage",
//            "title": "diet coke",
//            "price": "1.00",
//            "prepTime": "5"
//        },
//        {
//            "category": "beverage",
//            "title": "lemonade",
//            "price": "1.00",
//            "prepTime": "5"
//        },
//        {
//            "category": "beverage",
//            "title": "water (from tap)",
//            "price": "0.00",
//            "prepTime": "5"
//        }
//    ]
//}