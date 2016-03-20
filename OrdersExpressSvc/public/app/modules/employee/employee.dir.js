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
      template: 'User: {{emp.user}} &nbsp; Pw: {{emp.pw}}',
      scope: {
        emp: '='
      },
      link: function($scope, element, attrs) {
        element.bind('click', function () {
          $state.go('employee.detail', {user: $scope.emp.user});
        });
        element.bind('mouseenter', function () {
          element.css('background-color', 'yellow');
        });
        element.bind('mouseleave', function () {
          element.css('background-color', 'white');
        });
      }
    };
  }

}());
