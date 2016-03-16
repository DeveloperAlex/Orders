(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeeController', employeeController);

  employeeController.$inject = ['$state'];

  /* @ngInject */
  function employeeController($state) {
    var vm = this;
    //vm.title = 'employee is the title of this';

    vm.employeelist = $state.$current.locals.globals.employeelist
    //vm.employeelist = employeelist;  //Isn't injected into this controller - from Resolve (in routing).

    vm.reload = function(){
      //$state.reload();
      $state.go('employee', {reload: true, inherit: false})
    };

  }

})();
