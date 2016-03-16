(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeesController', employeesController);

  //employeesController.$inject = ['$route'];
  employeesController.$inject = ['$state'];

  /* @ngInject */
  function employeesController($state) {
    var vm = this;
    vm.title = 'employees is the title of this';

    vm.employeeslist = $state.$current.locals.globals.employeeslist

  }

})();
