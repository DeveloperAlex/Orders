// Create empty modules so that we could attach things to them later
// This is needed because Angular doesn't allow you to specify module
// references each time - only first time.

//angular.module("ordersApp", ['OTPWeb.Directives', 'ngynSelectKey', 'bento.modern', 'aa.notify', 'ui.router', 'ui.bootstrap', 'angular-data.DSCacheFactory', 'wijmo', 'wijspread']);
angular.module("ordersApp", ['ui.grid', 'ui.grid.pagination', 'ui.router']);   //['ui.bootstrap']);

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
])
;

angular.module("ordersApp")
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
    .state('login', {
            url: '/login',
            controller: 'loginController',
            templateUrl: 'app/feature/login.html'
        })
    .state('page1', {
            url: '/page1',
            templateUrl: 'app/test/page1.html'
        })
    .state('page2', {
            url: '/page2',
            templateUrl: 'app/test/page2.html'
        })
    .state('page3', {
            url: '/page3',
            templateUrl: 'app/test/page3.html'
        });

    }]);


//.state('form', {
//url: '/form',
//            templateUrl: 'form.html',
//controller: 'formController'
//})




/*
    //Turn off by passing false to debugEnabled.
    //Usage: $log.debug('Debug msg');  //Better than console.log("can't be turned off easily");
    .config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(true);
    }])
*/




angular.module('ordersApp')
    .controller('testController', ['$scope', function($scope) {
        $scope.name = 'Testing 123';
    }]);

angular.module('ordersApp')
.directive('myDirective', function() {
    return {
        restrict: 'E',
        template: '<div>This is my directive</div>'
    };
});

