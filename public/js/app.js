// if you want to use a module like angular on a per-module basis (var angular), you must use the export
//  value within browserify-shim; since angular attaches itself to the window, the export lets your module
//  know to check window object for angular
//var angular = require('angular');
//require('angular-route');
//var d3 = require('d3');
//var nv = require('nvd3');

var $ = require('jquery');
var angular = require('angular');

require('angular-route');

var nvd3 = require('nvd3');
var d3 = require('d3');


console.log($);
console.log(angular);

console.log(d3);
console.log(nvd3);

var myApp = angular.module('myApp', ['ngRoute']);

require('./lol');