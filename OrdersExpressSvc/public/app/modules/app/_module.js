//angular.module("ordersApp", ['OTPWeb.Directives', 'ngynSelectKey', 'bento.modern', 'aa.notify', 'ui.router', 'ui.bootstrap', 'angular-data.DSCacheFactory', 'wijmo', 'wijspread']);
//debugger;


angular.module('ordersApp', [
  'auth0', 'angular-storage', 'angular-jwt',
  'ui.grid', 'ui.grid.pagination', 'ui.router',
  'oa-login-passport', 'oa-home',
  'oa-common', 'oa-employee',
  'oa-order', 'oa-user'
]); //['ui.bootstrap']);

// debugger;
