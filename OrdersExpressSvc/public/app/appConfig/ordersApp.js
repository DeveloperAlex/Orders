// Create empty modules so that we could attach things to them later
// This is needed because Angular doesn't allow you to specify module
// references each time - only first time.

//angular.module("ordersApp", ['OTPWeb.Directives', 'ngynSelectKey', 'bento.modern', 'aa.notify', 'ui.router', 'ui.bootstrap', 'angular-data.DSCacheFactory', 'wijmo', 'wijspread']);
angular.module("ordersApp", [
    'auth0', 'angular-storage', 'angular-jwt',
    'ui.grid', 'ui.grid.pagination', 'ui.router',
    'orders.login', 'orders.home'
]);   //['ui.bootstrap']);

//https://github.com/angular-ui/ui-router/wiki#state-change-events
angular.module("ordersApp")
    .run(['$rootScope',
    function ($rootScope) {
        //Debugging hooks
        $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            console.log("$stateChangeStart fired!");
        });
        $rootScope.$on('$stateNotFound', 
        function (event, unfoundState, fromState, fromParams) {
            console.log(unfoundState.to);
            console.log(unfoundState.toParams);
            console.log(unfoundState.options);
        })        
        $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
            console.log("$stateChangeSuccess fired!");
        });
        $rootScope.$on('$stateChangeError', 
        function (event, toState, toParams, fromState, fromParams, error) {
            console.log("$stateChangeError: " + error);
        });
    }
]);

angular.module("ordersApp")
.config([
        '$stateProvider', '$urlRouterProvider', 'authProvider', '$httpProvider', 
        'jwtInterceptorProvider', 'Auth0Constant',
function (
        $stateProvider, $urlRouterProvider, authProvider, $httpProvider, 
        jwtInterceptorProvider, Auth0Constant
    ) {
    $stateProvider
    // .state('login', {
    //         url: '/login',
    //         controller: 'loginController as login',
    //         templateUrl: 'app/feature/login.html'
    //     })
    
    .state('/', {
            controller: 'HomeCtrl',
            templateUrl: 'app/modules/home/home.html',
            requiresLogin: true
        })
    .state('login', {
            controller: 'LoginCtrl',
            templateUrl: 'app/modules/login/login.html'
        })
    .state('user', {
            url: '/user/:username',
            controller: 'userController as user',
            templateUrl: 'app/feature/user.html'
        })
    .state('order', {
            url: '/order',
            controller: 'orderController as order',
            templateUrl: 'app/feature/order.html'
        })

    .state('page1', {
            url: '/page1',
            templateUrl: 'app/test/page1.html'
            //requiresLogin: true  //TODO: Testing if Auth0 code is working.
        })
    .state('page2', {
            url: '/page2',
            templateUrl: 'app/test/page2.html'
            //requiresLogin: true  //TODO: Testing if Auth0 code is working.
        })
    .state('page3', {
            url: '/page3',
            templateUrl: 'app/test/page3.html'
            //requiresLogin: true  //TODO: Testing if Auth0 code is working.
        });

    $urlRouterProvider.otherwise('/');


    authProvider.init({
        domain: Auth0Constant.AUTH0_DOMAIN,
        clientID: Auth0Constant.AUTH0_CLIENT_ID,
        loginUrl: '/login'
    });

    var refreshingToken = null;
    jwtInterceptorProvider.tokenGetter = function (store, jwtHelper) {
        var token = store.get('token');
        var refreshToken = store.get('refreshToken');
        if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
                return store.get('token');
            } else {
                if (refreshingToken === null) {
                    refreshingToken = auth.refreshIdToken(refreshToken).then(function (idToken) {
                        store.set('token', idToken);
                        return idToken;
                    }).finally(function () {
                        refreshingToken = null;
                    });
                }
                return refreshingToken;
            }
        }
    }
    $httpProvider.interceptors.push('jwtInterceptor');

}]);




angular.module("ordersApp")
.run(function ($rootScope, auth, store, jwtHelper, $location) {  //TODO: Not minsafe!!
    var refreshingToken = null;
    $rootScope.$on('$locationChangeStart', function () {  //TODO: S/this be $stateChangeStart instead??
        var token = store.get('token');
        var refreshToken = store.get('refreshToken');

        if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
                if (!auth.isAuthenticated) {
                    auth.authenticate(store.get('profile'), token);
                }
            } else {
                if (refreshToken) {
                    if (refreshingToken === null) {
                        refreshingToken = auth.refreshIdToken(refreshToken).then(function (idToken) {
                            store.set('token', idToken);
                            auth.authenticate(store.get('profile'), idToken);
                        }).finally(function () {
                            refreshingToken = null;
                        });
                    }
                    return refreshingToken;
                } else {
                    $location.path('/login');
                }
            }
        }
    });
    auth.hookEvents();
});







/*
    //Turn off by passing false to debugEnabled.
    //Usage: $log.debug('Debug msg');  //Better than console.log("can't be turned off easily");
    .config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(true);
    }])
*/




//angular.module('ordersApp')
//    .controller('testController', ['$scope', function($scope) {
//        $scope.name = 'Testing 123';
//    }]);

//angular.module('ordersApp')
//.directive('myDirective', function() {
//    return {
//        restrict: 'E',
//        template: '<div>This is my directive</div>'
//    };
//});

