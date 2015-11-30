(function () { 
    angular.module("ordersApp").factory('MongoService', ['$http', '$q', function ($http, $q) {
        var factory = {};
        factory.testProperty = "MongoService - testProperty";
            
        //http://stackoverflow.com/questions/20369377/how-to-use-http-get-in-angularjs-correctly-in-specific-for-an-external-api-cal        
        factory.getEmployees = function () {
                deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: 'api/employee'
                    //url: 'https://www.example.com/api/v1/page'
                    //params: 'limit=10, sort_by=created:desc',
                    //headers: { 'Authorization': 'Token token=xxxxYYYYZzzz' }
                }).success(function (data) {
                    //console.log('data= ' + data);
                    deferred.resolve(data);
                }).error(function () {
                    alert("error - getEmployees");
                    deferred.reject(error);
                });
                return deferred.promise;
        };
        
        return factory;
    }]);
})();


//$http

// Add httpInterceptor to ordersApp.js - with console.log's.  Later we'll add security token thingy - need to research that.



//myApp.service('dataService', function ($http, $q) {
//    this.getData = function () {
//        deferred = $q.defer();
//        $http({
//            method: 'GET',
//            url: 'https://www.example.com/api/v1/page',
//            params: 'limit=10, sort_by=created:desc',
//            headers: { 'Authorization': 'Token token=xxxxYYYYZzzz' }
//        }).success(function (data) {
//            // With the data succesfully returned, we can resolve promise and we can access it in controller
//            deferred.resolve();
//        }).error(function () {
//            alert("error");
//            //let the function caller know the error
//            deferred.reject(error);
//        });
//        return deferred.promise;
//    }
//});

