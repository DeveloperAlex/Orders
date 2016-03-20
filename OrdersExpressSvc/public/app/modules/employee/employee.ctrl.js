(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeeController', employeeController);

  employeeController.$inject = ['$state'];

  /* @ngInject */
  function employeeController($state) {
    var vm = this;

    vm.employeelist = $state.$current.locals.globals.employeelist;

    vm.reload = function(){
      //$state.reload();
      $state.go('employee', {reload: true, inherit: false})
    };

  }

})();
