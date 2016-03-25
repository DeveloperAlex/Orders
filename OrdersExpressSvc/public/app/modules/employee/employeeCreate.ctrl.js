(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeeCreateController', employeeCreateController);

  employeeCreateController.$inject = ['$state', '$location', 'restSvc', 'employeeModel'];

  /* @ngInject */
  function employeeCreateController($state, $location, restSvc, employeeModel) {
    var vm = this;
    vm.emp = {};

    vm.newemployee = 'testing new employee';

    vm.submit = function(data){
      console.log('data', data);
      debugger;
      
      var emp = employeeModel.getEmployeeModel(data);

      restSvc.createEmployee(emp)
        .then(function(){
          //$location.path("/employee");
          $state.go("employee");
        })
        .catch(function(err){
          console.log('Create employee FAILED', err);
          //TODO: Add a toastr to notify that this failed.
        });

    };


  }

})();
