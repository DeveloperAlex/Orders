'use strict';
var fs = require('fs');
var obj;

try {
  var dir = __dirname;
  dir = dir.substr(0, dir.lastIndexOf('/'));
  dir = dir.substr(0, dir.lastIndexOf('/'));
  var file = dir + '/passwords.json';
  console.log(new Date().toString());
  console.log('Using passwords file= ' + file);
  obj = JSON.parse(fs.readFileSync(file, 'utf8'));
} catch (e) {
  //Try again - perhaps we're running on a microsoft box.
  try {
    var dir2 = __dirname;
    dir2 = dir2.substr(0, dir2.lastIndexOf('\\'));
    dir2 = dir2.substr(0, dir2.lastIndexOf('\\'));
    var file2 = dir2 + '\\passwords.json';
    console.log(new Date().toString());
    console.log('Using passwords file= ' + file2);
    obj = JSON.parse(fs.readFileSync(file2, 'utf8'));
  } catch (error2) {
    console.log('Unable to find ' + file2 + '.  Error= ' + error2);
  }
}

module.exports = obj;