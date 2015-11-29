(function () {
    "use strict";
    angular.module('ordersApp').controller('loginController', ['$scope', function ($scope) {
            $scope.logintest = 'Login test 123';
        }]);
    
    
    angular.module('ordersApp').directive('myDirective', function () {
        return {
            restrict: 'E',
            template: '<div>This is my directive</div>'
        };
    });

})();
