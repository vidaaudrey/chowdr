angular.module('tinnr.starDirectives', [])
  .directive('starrating', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/_stars.html',
      require: '^FormulaController'
    };
  });
