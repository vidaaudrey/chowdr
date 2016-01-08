angular.module('tinnr.meals', ['ui.router'])
  .controller('MealsController', ['$scope', 'Meals', '$state', function ($scope, Meals, $state) {
    $scope.cols = 4;
    $scope.meals = [];
    $scope.offsets = 0;
    $scope.isRecipeListPage = $state.includes('recipeList');
    $scope.getFormulaPage = function (id) {
      $state.go('formula', { id: id });
    };


    $scope.getMeals = function () {
      Meals.getMeals()
        .then(function (res) {
          $scope.offsets = $scope.cols - (res.data.length % $scope.cols);
          $scope.meals = _.chunk(res.data, $scope.cols);
        })
        .catch(function (error) {
          console.log('Error fetching meals', error);
        });
    };
    $scope.deleteMeal = function (meal) {
      Meals.deleteMeal(meal)
        .catch(function (error) {
          console.log('Error deleting meal', error);
        });
    };

    $scope.getMeals();
  }]);
