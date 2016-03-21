(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeeCreateController', employeeCreateController);

  employeeCreateController.$inject = ['$state'];

  /* @ngInject */
  function employeeCreateController($state) {
    var vm = this;

    vm.newemployee = 'testing new employee';
  }

})();
