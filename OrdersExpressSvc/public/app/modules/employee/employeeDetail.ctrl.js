(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeeDetailController', employeeDetailController);

  employeeDetailController.$inject = ['$state', '$stateParams'];

  /* @ngInject */
  function employeeDetailController($state, $stateParams) {
  //function employeeDetailController() {
    var vm = this;
    //vm.title = 'employee detail is the title of this';
    //vm.user = 'blahblahuser';   //$stateParams.user;
    vm.stateParamsUser = $stateParams.user;

    vm.resolveduser = $state.$current.locals.globals.resolveduser;
    vm.mongoUser = $state.$current.locals.globals.mongoUser;

  }

})();
