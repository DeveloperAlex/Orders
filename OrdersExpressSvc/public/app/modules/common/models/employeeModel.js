//Node has a similarly named file.

(function () {
  'use strict';

  angular
    .module('oa-common')
    .factory('employeeModel', employeeModel);

  function employeeModel() {
    var vm = this;
    return {
      getEmployeeModel: getEmployeeModel
    };

    function getEmployeeModel(data) {
      if (!data) throw new Error('No data to create employee model.');

      return {
        user: data.user.$modelValue || "",
        pw: data.pw.$modelValue || ""
      };
    }

  }

}());
