(function () {
  'use strict';

  angular
    .module('oa-common')
    .constant('constants',
      {
        auth0: {
          domain: 'developeralex.auth0.com',
          clientID: 'zK2QYeeXHcR5NsyULkSudRfv3QytCueH'
        },
        restful: {
          //url: 'http://app.developeralex.com/api/',  //Suffix url w/ a "/".
          url: 'http://localhost:8181/api/',  //Suffix url w/ a "/".
          version: 'v1'  //a restful service should be versioned (either in url or header).
        }
      });

})();
