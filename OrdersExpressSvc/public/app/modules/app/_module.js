//angular.module("ordersApp", ['OTPWeb.Directives', 'ngynSelectKey', 'bento.modern', 'aa.notify', 'ui.router', 'ui.bootstrap', 'angular-data.DSCacheFactory', 'wijmo', 'wijspread']);
//debugger;


angular.module('ordersApp', [
  'auth0', 'angular-storage', 'angular-jwt',
  'ui.grid', 'ui.grid.pagination', 'ui.router',
  'oa-login', 'oa-home',
  'oa-common', 'oa-employee'
]); //['ui.bootstrap']);


//debugger;
// try {
//   var isAppDefinedYet = angular.module("ordersApp");
// }
// catch(err)
// {
//   angular.module('ordersApp', [
//     'auth0', 'angular-storage', 'angular-jwt',
//     'ui.grid', 'ui.grid.pagination', 'ui.router',
//     'orders.login', 'orders.home',
//     'oa-common', 'oa-employee'
//   ]); //['ui.bootstrap']);
// }




// debugger;
//
// //Note: Its possible that Gulp Inject could order the files incorrectly - this fixes that.
// var ordersApp = ordersApp;  //|| {};
//
// if (!ordersApp) {
//   ordersApp = angular.module('ordersApp', [
//     'auth0', 'angular-storage', 'angular-jwt',
//     'ui.grid', 'ui.grid.pagination', 'ui.router',
//     'orders.login', 'orders.home',
//     'oa-common', 'oa-employee'
//   ]); //['ui.bootstrap']);
// }
//
// debugger;

