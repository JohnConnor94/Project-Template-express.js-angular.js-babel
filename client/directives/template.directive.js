angular
  .module('myApp')
  .directive('nameDirective', function () {
    // factory of function 
    return {
      // html template to add 
      template: '',

      // this controller will run on every element that has the directive attribute
      controller: 'directiveCtrl',

      // true     => creates a new scope for each instance of the directive
      // {}       => creates a new ISOLATE scope for each instance of the directive
      // false    => default, no scope i screate for the directive
      scope: '',

      // this function will be executed on every elemetn that has the directive attribute
      link: function link(scope, element, attributes) {
        // directive's logic

        
      }
    };
  });