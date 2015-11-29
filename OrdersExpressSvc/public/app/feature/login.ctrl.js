(function () {
    "use strict";
    angular.module('ordersApp').controller('loginController', ['$scope', 'MongoService', function ($scope, MongoService) {
            $scope.logintest = 'Login test 123';
            $scope.mongotest = MongoService.testProperty;
        }]);
    
    
    angular.module('ordersApp').directive('myDirective', function () {
        return {
            restrict: 'E',
            template: '<div>This is my directive</div>'
        };
    });

})();
