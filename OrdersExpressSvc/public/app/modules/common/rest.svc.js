(function () {
  'use strict';

  angular
    .module('oa-common')
    .factory('restSvc', restSvc);

  restSvc.$inject = ['$http', '$q'];

  /* @ngInject */
  function restSvc($http, $q) {
    var vm = this;
    return {
      getEmployees: getEmployees
    };

    vm.restfulUrl = 'http://localhost:8181/api/'; //Always end url with "/".  //TODO: Refactor - inject constants.


    function getEmployees() {
      //http://localhost:8181/api/employee  //This is the endpoint we want.
      //return list of all employees from node.js restful service (as a promise).

      vm.deferredGetEmployees = $q.defer();
      $http({
        method: 'GET',
        //url: vm.restfulUrl + 'employee'
        url: 'http://localhost:8181/api/employee'
      }).success(function (data) {
        vm.deferredGetEmployees.resolve(data);
      }).error(function (err) {
        console.log('deferredGetEmployees err', err);
        //otpUserErrorManager.reportError(vm.otpResourceAgent.translate('otpResources.forms.errorGettingAllUnits'));
        vm.deferredGetEmployees.reject('There was an error with common rest.svc.js :: getEmployees.');
      });
      return vm.deferredGetEmployees.promise;
    }

  }

})();