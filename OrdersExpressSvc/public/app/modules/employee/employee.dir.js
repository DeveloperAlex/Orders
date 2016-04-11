(function () {
  'use strict';

  angular
    .module('oa-employee')
    .directive('employee', employee);

  employee.$inject = ['$state'];

  /* @ngInject */
  function employee($state) {
    return {
      restrict: 'E',
      //template: 'User: {{emp.user}} &nbsp; Pw: {{emp.pw}}',
      template: '<div class="row" style="margin-top: 2px"><button class="btn btn-xs col-sm-1" ng-click="employeeDelete(emp)">Delete</button><span class="col-sm-2">User: {{emp.user}}</span><span class="col-sm-2">Pw: {{emp.pw}}</span></div>',
      scope: {
        emp: '='
      },
      controller: ['$scope', 'restSvc', '$state', '$location', function($scope, restSvc, $state, $location){
        $scope.employeeDelete = function(emp){
          //alert("Deleting emp user= " + emp.user);
          //debugger;
          restSvc.deleteEmployee(emp)
            .then(function(data){
              //TODO: Toastr data.
              //$state.go('employee');
              //$state.go('employee',"{}","{reload :true}");
              //$state.go($state.current, {}, {reload: true});
              // $state.go('employee', {}, {reload: true});
              //debugger;
              //$location.path('/employee');
              $state.go("employee", {}, {reload: true});
            });
        };
      }],
      link: function($scope, element, attrs) {
        element.bind('click', function () {
          $state.go('employee.detail', {user: $scope.emp.user});
        });
        element.bind('mouseenter', function () {
          //element.css('background-color', 'yellow');
          //console.log('element', element);
          element.find('.row').css('background-color', 'yellow');
        });
        element.bind('mouseleave', function () {
          //element.css('background-color', 'white');
          element.find('.row').css('background-color', 'white');
        });
      }
    };
  }

}());
