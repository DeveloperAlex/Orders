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
      template: '<div class="row"><span class="col-sm-2">User: {{emp.user}}</span><span class="col-sm-2">Pw: {{emp.pw}}</span></div>',
      scope: {
        emp: '='
      },
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
