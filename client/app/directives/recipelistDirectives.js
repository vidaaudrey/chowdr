angular.module('tinnr.recipelistDirectives', [])
  .directive('recipelist', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/_recipelist.html',
      require: '^RecipeListController'
    };
  });
