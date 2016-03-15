(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeesController', employeesController);

  employees.$inject = [''];

  /* @ngInject */
  function employeesController() {
    var vm = this;
    vm.title = 'employees is the title of this';

  }

})();
