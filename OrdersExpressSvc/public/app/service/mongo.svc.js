(function () { 
    angular.module("ordersApp").factory('MongoService', function () {
        var factory = {};
        factory.testProperty = "MongoService - testProperty";
        
        factory.method1 = function () {
            //..
        };
        
        factory.method2 = function () {
            //..
        };
        
        return factory;
    });
})();
