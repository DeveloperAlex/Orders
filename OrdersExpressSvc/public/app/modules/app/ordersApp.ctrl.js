angular.module('ordersApp')
  .controller('AppCtrl', ['$scope', '$location', 'toaster', 'oaState',
    function AppCtrl($scope, $location, toaster, oaState) {
      var vm = this;
      //$scope.test01 = "testing test01";
      vm.test01 = 'testing test01';

      vm.testToast = function () {
        toaster.pop('success', "title", "text");
      };


      //vm.name = oaState.profile().name;
      //vm.name = 'blah name';  //oaState.profile().name;
      vm.name = '';
      vm.isLoggedIn = oaState.isLoggedIn;

      // $scope.watch(function() {
      //   return "vm.isLoggedIn";  //"oaState.isLoggedIn";
      // }, function() {
      //   vm.name = oaState.profile().name;
      // });

      // $scope.$watch("vm.isLoggedIn", function() {
      //   vm.name = oaState.profile().name;
      // });

      $scope.$watch(function() {
        //return vm.isLoggedIn;  //"oaState.isLoggedIn";
        //return oaState.isLoggedIn().toString();
        return oaState.isLoggedIn();
      }, function() {
        //console.log("$watch fired");
        vm.name = oaState.profile().name;
      });



      //TODO: Fix pageTitle - used to work. S/b @stateChangeSuccess now.
      $scope.$on('$routeChangeSuccess', function (e, nextRoute) {
        if (nextRoute.$$route && angular.isDefined(nextRoute.$$route.pageTitle)) {
          $scope.pageTitle = nextRoute.$$route.pageTitle + ' | Demo App';
          //$route.current.pageTitle is typical way.
          //$route.current.params.foo if ?foo=123 is in querystring (params does either). pathParams...
        }
      });
      //$rootScope.$on('$routeChangeSuccess', function (e, nextRoute) {
      //  if (nextRoute.$$route && angular.isDefined(nextRoute.$$route.pageTitle)) {
      //    vm.pageTitle = nextRoute.$$route.pageTitle + ' | Demo App';
      //  }
      //});
    }]);
