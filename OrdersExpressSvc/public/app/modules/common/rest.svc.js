(function () {
  'use strict';

  angular
    .module('oa-common')
    .factory('restSvc', restSvc);

  restSvc.$inject = ['$http', '$q', '$httpParamSerializer'];

  /* @ngInject */
  function restSvc($http, $q, $httpParamSerializer) {
    var vm = this;
    return {
      test01: test01,
      getEmployee: getEmployee,
      getEmployees: getEmployees,
      createEmployee: createEmployee
    };

    //TODO: RESTful service has no versioning.
    //vm.restfulUrl = 'http://localhost:8181/api/'; //Always end url with "/".  //TODO: Refactor - inject constants.


    function test01(){
      return 72;
    }


    function getEmployee(user) {
      vm.deferredGetEmployee = $q.defer();
      $http({
        method: 'GET',
        //url: vm.restfulUrl + 'employee'
        url: 'http://localhost:8181/api/employee?user=' + user
      }).success(function (data) {   //TODO: success/error have been deprecated (see ng1.5 https://docs.angularjs.org/api/ng/service/$http ).
        vm.deferredGetEmployee.resolve(data[0]);
        //vm.deferredGetEmployee.resolve(data);
      }).error(function (err) {
        console.log('deferredGetEmployees err', err);
        //otpUserErrorManager.reportError(vm.otpResourceAgent.translate('otpResources.forms.errorGettingAllUnits'));
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
        //url: vm.restfulUrl + 'employee'
        url: 'http://localhost:8181/api/employee'
      }).success(function (data) {   //TODO: success/error have been deprecated (see ng1.5 https://docs.angularjs.org/api/ng/service/$http ).
        vm.deferredGetEmployees.resolve(data);
      }).error(function (err) {
        console.log('deferredGetEmployees err', err);
        //otpUserErrorManager.reportError(vm.otpResourceAgent.translate('otpResources.forms.errorGettingAllUnits'));
        vm.deferredGetEmployees.reject('There was an error with common rest.svc.js :: getEmployees.');
      });
      return vm.deferredGetEmployees.promise;
    }


    function createEmployee(emp) {
      vm.deferredCreateEmployee = $q.defer();

      debugger;
      console.log('START restSvc.createEmployee');

      $http({
        method: 'POST',
        //url: vm.restfulUrl + 'employee'
        url: 'http://localhost:8181/api/employee',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},  //TODO: Maybe put this in httpInceptors - http://stackoverflow.com/questions/11442632/how-can-i-post-data-as-form-data-instead-of-a-request-payload/11443066#answer-19633847
        data: $httpParamSerializer(emp)  //TODO: Fixed in ng1.4 - so now we're good (don't need to convert data).
      }).then(function (data) {   //TODO: success/error have been deprecated (see ng1.5 https://docs.angularjs.org/api/ng/service/$http ).

        console.log('SUCCESS restSvc.createEmployee');

        vm.deferredGetEmployees.resolve(data);
      }).catch(function (err) {

        console.log('ERROR restSvc.createEmployee');

        console.log('deferredGetEmployees err', err);
        //otpUserErrorManager.reportError(vm.otpResourceAgent.translate('otpResources.forms.errorGettingAllUnits'));
        vm.deferredGetEmployees.reject('There was an error with common rest.svc.js :: getEmployees.');
      });
      return vm.deferredCreateEmployee.promise;
    }


  }

})();
