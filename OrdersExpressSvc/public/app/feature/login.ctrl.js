(function () {
    "use strict";
    angular.module('ordersApp').controller('loginController', ['$scope', 'MongoService', function ($scope, MongoService) {
            $scope.logintest = 'Login test 123';
            $scope.mongotest = MongoService.testProperty;
            
            $scope.employees = null;
            //$scope.employees = MongoService.getEmployees();
            MongoService.getEmployees().then(function (response) {
                //console.log('MongoService.getEmployees()= ' + response)
                $scope.employees = response;
            });



        }]);
    

// ng-repeat

    
    //angular.module('ordersApp').directive('myDirective', function () {
    //    return {
    //        restrict: 'E',
    //        template: '<div>This is my directive</div>'
    //    };
    //});

})();


//http://stackoverflow.com/questions/20369377/how-to-use-http-get-in-angularjs-correctly-in-specific-for-an-external-api-cal
//myApp.controller('AngularJSCtrl', function ($scope, dataService) {
//    $scope.data = null;
//    dataService.getData().then(function (response) {
//        $scope.data = response;
//    });
//});

