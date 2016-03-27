//angular.module("ordersApp", ['OTPWeb.Directives', 'ngynSelectKey', 'bento.modern', 'aa.notify', 'ui.router', 'ui.bootstrap', 'angular-data.DSCacheFactory', 'wijmo', 'wijspread']);

angular.module('ordersApp', [
  'auth0', 'angular-storage', 'angular-jwt',
  'ui.grid', 'ui.grid.pagination', 'ui.router',
  'orders.login', 'orders.home',
  'oa-common', 'oa-employee'
]); //['ui.bootstrap']);
