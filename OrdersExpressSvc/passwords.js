"use strict";
var fs = require('fs');

try {
    var dir = __dirname;
    dir = dir.substr(0, dir.lastIndexOf('\\'));
    dir = dir.substr(0, dir.lastIndexOf('\\'));
    var file = dir + '\\passwords.json';
    console.log(new Date().toString());
    console.log('Using passwords file= ' + file);
    var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
} catch (e) {
    console.log('Unable to find ' + file + '.  Error= ' + e);    
};

module.exports = obj;
