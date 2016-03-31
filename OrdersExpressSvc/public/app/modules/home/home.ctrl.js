(function () {
  'use strict';

  angular
    .module('oa-home')
    .controller('homeController', homeController);

  //loginController.$inject = ['$state'];

  /* @ngInject */
  function homeController() {   //($state) {
    var vm = this;

    vm.test01 = "testing that test01 works (on home controller)";

    // vm.employeelist = $state.$current.locals.globals.employeelist;

    // vm.reload = function(){
    //   //$state.reload();
    //   $state.go('employee', {reload: true, inherit: false})
    // };

  }

})();
