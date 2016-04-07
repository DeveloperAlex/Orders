(function () {
  'use strict';

  angular
    .module('oa-common')
    .factory('notification', notification);

  notification.$inject = ['toaster'];

  /* @ngInject */
  function notification(toaster) {
    var vm = this;
    return {
      test01: test01,
      notify: notify,
      success: success,
      info: info,
      warn: warning,
      warning: warning,
      error: error
    };

    //TODO: RESTful service has no versioning.
    //vm.restfulUrl = 'http://localhost:8181/api/'; //Always end url with "/".  //TODO: Refactor - inject constants.
    //TODO: Add Toastr notifications (at least for when there's a failure). Maybe do upon success too - so people see it working.


    function test01(){
      return 72;
    }

    // https://github.com/jirikavi/AngularJS-Toaster
    function notify(success, title, text) {
      success = success || 'success';
      title = title || 'Notify';
      text = text || 'text';
      
      toaster.pop(success, title, text);
    }


    function success(title, text) {
      title = title || 'Success';
      text = text || 'text';

      notify('success', title, text);
    }

    function info(title, text) {
      title = title || 'Info';
      text = text || 'text';

      notify('info', title, text);
    }

    function warning(title, text) {
      title = title || 'Warning';
      text = text || 'text';

      notify('warning', title, text);
    }

    function error(title, text) {
      title = title || 'Error';
      text = text || 'text';

      notify('error', title, text);
    }


  }

})();
