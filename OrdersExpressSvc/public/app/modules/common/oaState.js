(function () {
  'use strict';

  angular
    .module('oa-common')
    .factory('oaState', oaState);

  oaState.$inject = ['store', 'toaster'];

  /* @ngInject */
  function oaState(store, toaster) {
    var vm = this;
    return {
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout,
      profile: profile
    };

    function isLoggedIn() {
      return !!_profile;
    }

    var _profile = null;
    function login(profile) {
      debugger;
      _profile = profile;
    }

    function logout() {
      _profile = null;
    }

    function profile() {
      debugger;
      var obj = {};
      if (_profile) {
        obj.name = _profile.name || _profile.email;
      } else {
        obj.name = 'Not logged in';
      }
      return obj;
    }

  }

})();
