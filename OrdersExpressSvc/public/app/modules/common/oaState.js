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

    var firstTimeCalled = true;
    function isLoggedIn() {
      // var p = store.get('profile');
      // var t = store.get('token');
      // var t = store.get('refreshToken');

      // //TODO: isLoggedIn is $watch'ed. Make this more efficient. Only read store 1st time - then use _profile.
      // if (firstTimeCalled) {  //isLoggedIn is $watch'ed - needs to be very efficient.
      //   _profile = store.get('profile');
      //   if (!!_profile) firstTimeCalled = false;
      // }

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
      if (_profile) {
        obj.name = "Logged in as '" + (_profile.name || _profile.email) + "'";
      } else {
        obj.name = 'Not logged in';
      }
      return obj;
    }

  }

})();
