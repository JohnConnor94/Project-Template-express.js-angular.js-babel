angular
  .module('myApp')
  .filter('nameFilter', function () {
    return function (input) {
      // here the filter's logic

      // if (someCondition) {
      //     do something 
      //     to transform input
      // }
      // else {
      //     do other fancy things
      // }

      // fireworks
      // dynamite
      // explosive code
      return input;
    };
  });
