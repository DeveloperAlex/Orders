(function () {
  'use strict';

  angular
    .module('oa-common')
    .factory('oaState', oaState);

  oaState.$inject = ['store', 'toaster'];

  /* @ngInject */
  function oaState(store, toaster) {
    return {
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout,
      profile: profile
    };
    //debugger;
    var vm = this;
    //var _profile = store.get('profile');
    var _profile = null;

    function isLoggedIn() {
      //debugger;
      // return !!_profile;

      var p = store.get('profile');
      var t = store.get('token');
      var t = store.get('refreshToken');

      _profile = store.get('profile');
      return !!_profile;
    }

    //debugger;
    function login(profile) {
      //debugger;
      //console.log("oaState.login was called.", profile);
      _profile = profile;
    }

    function logout() {
      //console.log("oaState.logout was called.");
      _profile = null;
    }

    function profile() {
      //debugger;
      var obj = {};
      if (_profile) {     //|| store.profile) {
        obj.name = 'Logged in as ' + (_profile.name || _profile.email);
      } else {
        obj.name = 'Not logged in';
      }
      return obj;
    }

  }

})();
