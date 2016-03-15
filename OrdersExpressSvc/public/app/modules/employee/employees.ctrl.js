(function () {
  'use strict';

  angular
    .module('oa-employee')
    .controller('employeesController', employeesController);

  //employeesController.$inject = ['$route'];
  employeesController.$inject = ['$state'];

  /* @ngInject */
  function employeesController($state, employeeslist) {
  //function employeesController($route) {
    var vm = this;
    vm.title = 'employees is the title of this';

    //vm.employeeslist = $route.current.locals.employeeslist;
    //vm.employeeslist = $state.current.data.employeeslist;
    //vm.employeeslist = $state.current.resolve.employeeslist;
    //vm.employeeslist = employeeslist;
    //vm.employeeslist = $state.$current;
    //console.log('$state.$current', $state.$current);
    vm.employeeslist = $state.$current.locals.globals.employeeslist

  }

})();
