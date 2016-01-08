angular.module('tinnr.recipeList', ['ui.router'])
  .controller('RecipeListController', ['$scope', '$stateParams', '$state', 'Recipes', function ($scope, $stateParams, $state, Recipes) {
    $scope.cols = 4;
    $scope.meals = [];
    $scope.offsets = 0;
    $scope.preferences = {};
    $scope.preferences.q = $stateParams.searchQuery;

    $scope.getRecipes = function (params) {
      console.log('the get recipes function is happening');
      Recipes.getRecipes(params)
        .then(function (data) {
          console.log('this got executed', JSON.parse(data).matches);
          $scope.meals = JSON.parse(data).matches;
          $scope.offsets = $scope.cols - ($scope.meals.length % $scope.cols);
          $scope.meals = _.chunk($scope.meals, $scope.cols);
        })
        .catch(function (error) {
          console.error('Error fetching recipes: ', error);
        });
    };

    $scope.getRecipes($scope.preferences);

    console.log('this is $stateParams in the recipeList.js file', $stateParams.searchQuery);

    $scope.getFormulaPage = function (id) {
      $state.go('formula', { id: id });
    };
  }]);
