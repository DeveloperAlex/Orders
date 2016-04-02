(function () {
  'use strict';

  angular
    .module('oa-login-passport')
    .controller('loginPassportController', loginPassportController);

  //loginController.$inject = ['$state'];

  // / * @ngInject * /
  function loginPassportController() {   //($state) {
    var vm = this;

    vm.test01 = "testing that test01 works";

    vm.userLogin = {};
    vm.userLogin.username = "login user";
    vm.userLogin.password = "login password";
    vm.login = function() {
      console.log('Congrats - you are now logged in');
    };

    vm.userSignup = {};
    vm.userSignup.username = "signup user";
    vm.userSignup.password = "signup password";
    vm.signup = function() {
      console.log('You just signed up');
    };

    // vm.employeelist = $state.$current.locals.globals.employeelist;

    // vm.reload = function(){
    //   //$state.reload();
    //   $state.go('employee', {reload: true, inherit: false})
    // };

  }

})();
