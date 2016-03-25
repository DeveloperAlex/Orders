/*
 This code inspired by Scott Allen's "An AngularKS Playbook" course (2/16/2015)
 https://app.pluralsight.com/library/courses/angularjs-playbook/exercise-files
 > I upgraded code to use jQuery instead (since my code isn't using jqlite).
 */

(function (module) {

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

/*
  var setupDom_OLD = function (element) {
    debugger;
    //var input = element[0].querySelector("input, textarea, select");
    //var type = input.getAttribute("type");
    //var name = input.getAttribute("name");
    var isInput = element.is("input, textarea, select");
    var type = element.attr("type");
    var name = element.attr("name");

    if (isInput && (type !== "checkbox" && type !== "radio")) {
      //input.classList.add("form-control");
      element.addClass("form-control");
    }

    //var label = element[0].querySelector("label");
    //label.classList.add("control-label");
    if (element.is("label")){
      element.addClass("control-label");
    }

    return name;
  };
*/

/*
  var setupDom = function (element) {
    debugger;
    //var isInput = element.is("input, textarea, select");
    var input = element.find("input, textarea, select");
    if (input){
      //input = input[0];
      var type = input.attr("type");
      var name = input.attr("name");

      if (type !== "checkbox" && type !== "radio") {
        input.addClass("form-control");
      }
    } else if (element.is("label")){
      element.addClass("control-label");
    } else {
      console.log('oooops in setupDom in forminput directive');
    }

    return name;
  };
*/


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

  // forminput.$inject = ['$state', '$location', 'restSvc'];
  // var forminput = function ($compile) {
  //   return {
  //     restrict: "A",
  //     require: "^form",
  //     link: link($compile)
  //   };
  // };
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

