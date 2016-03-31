(function () {
  'use strict';

  angular
    .module('oa-login-passport')
    .controller('loginPassportController', loginPassportController);

  //loginController.$inject = ['$state'];

   / * @ngInject * /
  function loginPassportController() {   //($state) {
    var vm = this;

    vm.test01 = "testing that test01 works";

    // vm.employeelist = $state.$current.locals.globals.employeelist;

    // vm.reload = function(){
    //   //$state.reload();
    //   $state.go('employee', {reload: true, inherit: false})
    // };

  }

})();
