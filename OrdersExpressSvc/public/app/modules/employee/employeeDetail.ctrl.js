(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeeDetailController', employeeDetailController);

  employeeDetailController.$inject = ['$state, $stateParams'];

  /* @ngInject */
  function employeeDetailController($state, $stateParams) {
    var vm = this;
    vm.title = 'employee detail is the title of this';
    vm.user = $stateParams.user;

    //vm.employeeslist = $state.$current.locals.globals.employeeslist

  }

})();
