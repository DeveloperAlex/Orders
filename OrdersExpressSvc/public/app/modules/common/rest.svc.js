(function () {
  'use strict';

  angular
    .module('oa-common')
    .factory('restSvc', restSvc);

  restSvc.$inject = ['$http', '$q', '$httpParamSerializer', 'notification', 'constants'];

  /* @ngInject */
  function restSvc($http, $q, $httpParamSerializer, notification, constants) {
    var vm = this;
    return {
      getEmployee: getEmployee,
      getEmployees: getEmployees,
      createEmployee: createEmployee,
      deleteEmployee: deleteEmployee
    };

    //TODO: RESTful service has no versioning.

    function getEmployee(user) {
      vm.deferredGetEmployee = $q.defer();
      $http({
        method: 'GET',
        //url: 'http://localhost:8181/api/employee?user=' + user
        url: constants.restful.url + 'employee?user=' + user
      }).then(function (data) {
        vm.deferredGetEmployee.resolve(data[0]);
      }).catch(function (err) {
        console.log('restSvc.deferredGetEmployee err', err);
        notification.error('getEmployee', err);
        vm.deferredGetEmployee.reject('There was an error with common rest.svc.js :: getEmployee.');
      });
      return vm.deferredGetEmployee.promise;
    }


    function getEmployees() {
      //http://localhost:8181/api/employee  //This is the endpoint we want.
      //return list of all employees from node.js restful service (as a promise).

      vm.deferredGetEmployees = $q.defer();
      $http({
        method: 'GET',
        //url: 'http://localhost:8181/api/employee'
        url: constants.restful.url + 'employee'
      }).then(function (data) {
        vm.deferredGetEmployees.resolve(data.data);
      }).catch(function (err) {
        console.log('restSvc.deferredGetEmployees err', err);
        notification.error('getEmployees', err);
        vm.deferredGetEmployees.reject('There was an error with common rest.svc.js :: getEmployees.');
      });
      return vm.deferredGetEmployees.promise;
    }


    function createEmployee(emp) {
      vm.deferredCreateEmployee = $q.defer();

      $http({
        method: 'POST',
        //url: 'http://localhost:8181/api/employee',
        url: constants.restful.url + 'employee',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},  //TODO: Maybe put this in httpInceptors - http://stackoverflow.com/questions/11442632/how-can-i-post-data-as-form-data-instead-of-a-request-payload/11443066#answer-19633847
        data: $httpParamSerializer(emp)  //TODO: Fixed in ng1.4 - so now we're good (don't need to convert data).
      }).then(function (data) {
        vm.deferredCreateEmployee.resolve(data);
      }).catch(function (err) {
        console.log('restSvc.deferredCreateEmployee err', err);
        notification.error('createEmployee', err);
        vm.deferredCreateEmployee.reject('There was an error with common rest.svc.js :: createEmployee.');
      });
      return vm.deferredCreateEmployee.promise;
    }

    
    function deleteEmployee(emp) {
      vm.deferredDeleteEmployee = $q.defer();

      //debugger;
      $http({
        method: 'DELETE',
        //url: 'http://localhost:8181/api/employee/' + emp._id
        url: constants.restful.url + 'employee/' + emp._id
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'},  //TODO: Maybe put this in httpInceptors - http://stackoverflow.com/questions/11442632/how-can-i-post-data-as-form-data-instead-of-a-request-payload/11443066#answer-19633847
        //data: $httpParamSerializer(emp._id)  //TODO: Fixed in ng1.4 - so now we're good (don't need to convert data).
      }).then(function (data) {
        vm.deferredDeleteEmployee.resolve(data);
      }).catch(function (err) {
        console.log('restSvc.deleteEmployee err', err);
        notification.error('deleteEmployee', err);
        vm.deferredDeleteEmployee.reject('There was an error with common rest.svc.js :: deleteEmployee.');
      });
      return vm.deferredDeleteEmployee.promise;
    }


  }

})();
