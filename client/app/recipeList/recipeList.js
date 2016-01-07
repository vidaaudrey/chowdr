angular.module('tinnr.recipeList', ['ui.router'])
  .controller('RecipeListController', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
    $scope.cols = 4;
    $scope.meals = [];
    $scope.offsets = 0;

    console.log('this is $scope.meals in the recipeList.js file', JSON.parse($stateParams.searchResponse).matches);
    $scope.searchResults = JSON.parse($stateParams.searchResponse).matches;
    $scope.offsets = $scope.cols - ($scope.searchResults.length % $scope.cols);
    $scope.meals = _.chunk($scope.searchResults, $scope.cols);
    $scope.getFormulaPage = function (id) {
      $state.go('formula', { id: id });
    }
  }]);
