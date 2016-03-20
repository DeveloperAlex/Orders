(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeeDetailController', employeeDetailController);

  employeeDetailController.$inject = ['$state', '$stateParams'];

  /* @ngInject */
  function employeeDetailController($state, $stateParams) {
    var vm = this;
    vm.stateParamsUser = $stateParams.user;

    vm.resolveduser = $state.$current.locals.globals.resolveduser;
    vm.mongoUser = $state.$current.locals.globals.mongoUser;

  }

})();
