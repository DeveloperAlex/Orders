(function () {
  'use strict';


  angular.module('ordersApp')
    .config([
      '$stateProvider', '$urlRouterProvider', 'authProvider', '$httpProvider',
      'jwtInterceptorProvider', '$logProvider',
      function ($stateProvider, $urlRouterProvider, authProvider, $httpProvider,
                jwtInterceptorProvider, $logProvider) {

        $logProvider.debugEnabled(true);

        $stateProvider
          .state('loginAuth0', {
              url: '/loginAuth0',
              controller: 'loginAuth0Controller as loginAuth0',
              templateUrl: 'app/modules/loginAuth0/login.html'
          })
          .state('logoutAuth0', {
            url: '/logoutAuth0',
            controller: 'logoutAuth0Controller as logoutAuth0',
            templateUrl: 'app/modules/loginAuth0/logout.html'
          })
            


        //.state('/', {
        //  controller: 'HomeCtrl',
        //  templateUrl: 'app/modules/home/home.html',
        //  pageTitle: 'Homepage',
        //  requiresLogin: true
        //})
          .state('home', {
            url: '/',
            controller: 'homeController',
            controllerAs: 'home',
            templateUrl: 'app/modules/home/home.html',
            pageTitle: 'Homepage',
            requiresLogin: true
          })


          // .state('login', {
          //   url: '/login',
          //   controller: 'loginPassportController',
          //   controllerAs: 'login',
          //   templateUrl: 'app/modules/loginPassport/login.html',
          //   pageTitle: 'Login using Passport.js'
          // })



          .state('user', {
            url: '/user/:username',
            controller: 'userController as user',
            templateUrl: 'app/modules/user/user.html',
            pageTitle: 'User',
            requiresLogin: true
          })
          .state('order', {
            url: '/order',
            controller: 'orderController as order',
            templateUrl: 'app/modules/order/order.html',
            pageTitle: 'Order',
            requiresLogin: true
          })
          //resolve: {  //TODO: Add resolve to each of these - for any Mongo calls (that might take time).
          //  event: function($route, eventData){
          //    //$route.current.locals.event = use in controller to read below promise.
          //    return eventData.getEvent($route.current.pathParams.eventId).$promise;
          //  }
          //}

          .state('loginPassport', {
            url: '/loginPassport',
            controller: 'loginPassportController',
            controllerAs: 'login',
            templateUrl: 'app/modules/loginPassport/login.html',
            pageTitle: 'Login using Passport.js'
          })
          .state('logoutPassport', {
            url: '/logoutPassport',
            // controller: 'logoutPassportController',
            // controllerAs: 'logout',
            templateUrl: 'app/modules/loginPassport/logout.html',
            pageTitle: 'Logout using Passport.js',
            resolve: {
              loggedout: function () {
                return true;  //TODO: Have this expire the token.
              }
            }
          })
          .state('signupPassport', {
            url: '/signup',
            // controller: 'signupPassportController',
            // controllerAs: 'signup',
            templateUrl: 'app/modules/loginPassport/signup.html',
            pageTitle: 'SignUp using Passport.js',
          })



            // url: '/page1',
            // templateUrl: 'app/test/page1.html',
            // pageTitle: 'Page1',
            // requiresLogin: true
          .state('page2', {
            url: '/page2',
            templateUrl: 'app/test/page2.html',
            pageTitle: 'Page2',
            requiresLogin: true
          })
          .state('page3', {
            url: '/page3',
            templateUrl: 'app/test/page3.html',
            pageTitle: 'Page3',
            requiresLogin: true
          })
          .state('employee', {
            url: '/employee',
            controller: 'employeeController as employees',
            templateUrl: 'app/modules/employee/employee.html',
            pageTitle: 'Employee Listing',
            requiresLogin: true,
            resolve: {
              employeelist: function (restSvc) {
                //return restSvc.getEmployees().$promise;  //$route.current.locals.employeeslist
                return restSvc.getEmployees();  //$route.current.locals.employeeslist
              }
            }
          })
          //.state('employee_detail', {
          //  url: '/employee/:user',
          //  controller: 'employeeDetailController as employeedetail',
          //  templateUrl: 'app/modules/employee/employeeDetail.html',
          //  pageTitle: 'Employee Detail',
          //  requiresLogin: true,
          //  resolve: {
          //    resolveduser: function($stateParams){
          //      return $stateParams.user;  //Later hit restSvc.getUser('user...')
          //    },
          //    mongoUser: function($stateParams, restSvc){
          //      return restSvc.getEmployee($stateParams.user);
          //    }
          //  }
          //})
          .state('employee.detail', {
            url: '/detail/:user',
            controller: 'employeeDetailController as employeedetail',
            templateUrl: 'app/modules/employee/employeeDetail.html',
            pageTitle: 'Employee Detail',
            requiresLogin: true,
            resolve: {
              resolveduser: function ($stateParams) {
                return $stateParams.user;  //Later hit restSvc.getUser('user...')
              },
              mongoUser: function ($stateParams, restSvc) {
                return restSvc.getEmployee($stateParams.user);
              }
            }
          })

          .state('employeeCreate', {
            url: '/employee/create',
            controller: 'employeeCreateController as employeeCreate',
            templateUrl: 'app/modules/employee/employeeCreate.html',
            pageTitle: 'Employee Create',
            requiresLogin: true
          })

        ;

        $urlRouterProvider.otherwise('/');


        //TODO: Move the secret info here to my non-Git file. Obviously refresh the keys to something different.
        authProvider.init({
          domain: 'developeralex.auth0.com',
          clientID: 'zK2QYeeXHcR5NsyULkSudRfv3QytCueH',
          callbackURL: location.href,
          // Here include the URL to redirect to if the user tries to access a resource when not authenticated.
          //loginUrl: '/login'
          loginState: 'loginAuth0'
        });



        // authProvider.init({
        //   domain: Auth0Constant.AUTH0_DOMAIN,
        //   clientID: Auth0Constant.AUTH0_CLIENT_ID,
        //   loginUrl: '/login'
        // });

        // var refreshingToken = null;
        // jwtInterceptorProvider.tokenGetter = ['store', 'jwtHelper', function (store, jwtHelper) {
        //   var token = store.get('token');
        //   var refreshToken = store.get('refreshToken');
        //   if (token) {
        //     if (!jwtHelper.isTokenExpired(token)) {
        //       return store.get('token');
        //     } else { //https://github.com/auth0/auth0-angular/blob/master/docs/refresh-token.md
        //       if (refreshingToken === null) {
        //         refreshingToken = auth.refreshIdToken(refreshToken).then(function (idToken) { //TODO: Possible bug w/ "auth".
        //           store.set('token', idToken);
        //           return idToken;
        //         }).finally(function () {
        //           refreshingToken = null;
        //         });
        //       }
        //       return refreshingToken;
        //     }
        //   }
        // }];
        // $httpProvider.interceptors.push('jwtInterceptor');

      }]);


}());
