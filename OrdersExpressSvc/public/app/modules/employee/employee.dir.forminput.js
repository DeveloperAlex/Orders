/*
 This code inspired by Scott Allen's "An AngularKS Playbook" course (2/16/2015)
 https://app.pluralsight.com/library/courses/angularjs-playbook/exercise-files
 > I upgraded code to use jQuery instead (since my code isn't using jqlite).
 
 Later I removed this cool directive from the code. I think in a real dev environment - I'd let 
 the UI people add the css styling - rather than have it programmatically added to a page.
 > Ugh, now we've lost the cool coloring - to show when a field is invalid - might turn this back on.
*/

/* Example of adding "forminput" directive to html:
   This was taken from: C:\@Code\@github\Orders\OrdersExpressSvc\public\app\modules\employee\employeeCreate.html
 <div forminput class="form-group">
   <label for="user" class="control-label">Your user name:</label>
   <input type="text" id="user" name="user" class="form-control" required minlength="3" maxlength="20"
   placeholder="User name"
   ng-model="employeeCreate.emp.user"
   ng-model-options="{debounce: {'default':500, 'blur':0}}">
 </div>
*/


(function (module) {
  'use strict';

  var watcherFor = function (form, name) {
    return function () {
      if (name && form[name]) {
        return form[name].$invalid;
      }
    };
  };

  var updaterFor = function (element) {
    return function (hasError) {
      if (hasError) {
        element.removeClass("has-success")
          .addClass("has-error");
      } else {
        element.addClass("has-success")
          .removeClass("has-error");
      }
    };
  };
  
  var setupDom = function (element) {
    var input = element.find("input, textarea, select");
    var type = input.attr("type");
    var name = input.attr("name");

    if (type !== "checkbox" && type !== "radio") {
      input.addClass("form-control");
    }

    var label = element.find("label");
    element.addClass("control-label");

    return name;
  };
  
  var addMessages = function(form, element, name, $compile, scope) {
    var messages = "<div class='help-block' ng-messages='" +
      form.$name + "." + name + ".$error" +
      "' ng-messages-include='employee.form.messages.html'><div>";
    element.append($compile(messages)(scope));
  };

  var link = function ($compile) {
    return function(scope, element, attributes, form) {
      var name = setupDom(element);
      addMessages(form, element, name, $compile, scope);
      scope.$watch(watcherFor(form, name), updaterFor(element));
    }
  };

  forminput.$inject = ['$compile'];
  function forminput ($compile) {
    return {
      restrict: "A",
      require: "^form",
      link: link($compile)
    };
  }


  module.directive("forminput", forminput);

}(angular.module("oa-employee")));
