angular.module('tinnr.recipeList', ['ui.router'])
  .controller('RecipeListController', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.cols = 4;
    $scope.meals = [];
    $scope.offsets = 0;

    console.log('this is $scope.meals in the recipeList.js file', JSON.parse($stateParams.searchResponse).matches);
    $scope.searchResults = JSON.parse($stateParams.searchResponse).matches;
    $scope.offsets = $scope.cols - ($scope.searchResults.length % $scope.cols);
    $scope.meals = _.chunk($scope.searchResults, $scope.cols);
  }]);
