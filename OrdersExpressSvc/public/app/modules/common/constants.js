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
        restfulUrl: 'http://app.developeralex.com/api/',  //Suffix url w/ a "/".
        restfulVersion: 'v1'  //a restful service should be versioned
      });

})();
