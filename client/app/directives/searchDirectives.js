angular.module('tinnr.searchDirectives', ['tinnr.recipes', 'ui.router'])
  .directive('searchbar', ['Recipes', '$state', function (Recipes, $state) {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/_search.html',
      controller: function ($scope) {
        $scope.preferences = {};
        $scope.searchResponse;
        $scope.getRecipes = function () {
          Recipes.getRecipes($scope.preferences)
            .then(function (data) {
              $scope.searchResponse = data;
              $state.go('recipeList', { searchResponse: $scope.searchResponse });
            })
            .catch(function (error) {
              console.error('Error fetching recipes: ', error);
            });
        };
      }
    };
  }]);
