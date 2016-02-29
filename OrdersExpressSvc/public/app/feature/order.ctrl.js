(function () {
    'use strict';
    angular.module('ordersApp').controller('orderController', ['$scope', 'MongoService', function ($scope, MongoService) {
            var self = this;
            
            self.logintest = 'Login test 123';
            self.mongotest = MongoService.testProperty;
            
            self.employees = null;

            MongoService.getEmployees().then(function (response) {
                //console.log('MongoService.getEmployees()= ' + response)
                self.employees = response;
            });

        }]);
    

    
    //angular.module('ordersApp').directive('myDirective', function () {
    //    return {
    //        restrict: 'E',
    //        template: '<div>This is my directive</div>'
    //    };
    //});

})();
