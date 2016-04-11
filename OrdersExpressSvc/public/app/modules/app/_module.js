//angular.module("ordersApp", ['OTPWeb.Directives', 'ngynSelectKey', 'bento.modern', 'aa.notify', 'ui.router', 'ui.bootstrap', 'angular-data.DSCacheFactory', 'wijmo', 'wijspread']);
//debugger;

(function () {
  'use strict';

  angular.module('ordersApp', [
    'auth0', 'angular-storage', 'angular-jwt',
    'ui.grid', 'ui.grid.pagination', 'ui.router',
    'toaster', 'ngAnimate',
    'oa-login-passport', 'oa-home',
    'oa-login-auth0',
    'oa-common', 'oa-employee',
    'oa-order', 'oa-user'
  ]); //['ui.bootstrap']);

// debugger;

}());
