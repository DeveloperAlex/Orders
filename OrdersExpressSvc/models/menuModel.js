"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuModel = new Schema({
  _id: {
    type: String
  },
  mealtime: {
    type: String
  },
  items: {
    type: {
      category: String,
      title: String,
      price: String,
      prepTime: String
    }
  }
  //items: { type: Object }
});

module.exports = mongoose.model('Menu', menuModel);



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