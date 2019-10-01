angular
  // main module definition
  .module("myApp", ["ngRoute"])
  // routes definition
  .config($routeProvider => {
    $routeProvider

      // route /
      .when("/", {
        template: "<div>/ selected</div>"

      })

      // route placeholder/
      .when("/placeholder", {
        template: "<div>placeholder</div>"

      })

      // everything else
      .otherwise({
        template: "<div>Nothing has been selected</div>"

      });
  });