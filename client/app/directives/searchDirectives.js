angular.module('tinnr.searchDirectives', ['tinnr.recipes', 'ui.router'])
  .directive('searchbar', ['$state', function ($state) {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/_search.html',
      controller: function ($scope) {
        $scope.preferences = {};
        $scope.searchResponse;
        $scope.getRecipes = function () {
          $state.go('recipeList', { searchQuery: $scope.preferences.q });
        };
      }
    };
  }]);
