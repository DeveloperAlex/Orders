// Create empty modules so that we could attach things to them later
// This is needed because Angular doesn't allow you to specify module
// references each time - only first time.

//angular.module("ordersApp", ['OTPWeb.Directives', 'ngynSelectKey', 'bento.modern', 'aa.notify', 'ui.router', 'ui.bootstrap', 'angular-data.DSCacheFactory', 'wijmo', 'wijspread']);
angular.module("ordersApp", []);   //['ui.router', 'ui.bootstrap']);

angular.module("ordersApp")
    .run(['$rootScope',
        function ($rootScope) {
            //Debugging hooks
            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    //console.log("$stateChangeStart fired!");
                });
            $rootScope.$on('stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    //console.log("stateChangeSuccess fired!");
                });
        }
    ])
;

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

//angular.module("ordersApp")
//.directive();



angular.module('ordersApp')
.directive('myDirective', function() {
    return {
        restrict: 'E',
        template: '<div>This is my directive</div>'
    };
});

