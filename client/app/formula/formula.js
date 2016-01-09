angular.module('tinnr.formula', [])
  .controller('FormulaController', ['$scope', 'Formula', '$stateParams', 'ShoppingList', function ($scope, Formula, $stateParams, ShoppingList) {
    // get the id of the recipe from the stateParams that is passed in by ui router
    // console.log($stateParams.id);
    $scope.message = '';


    // will fill in when we get the remote dat
    var remoteRecipe = {
      name: 'Recipe Name',
      yield: 1,
      flavors: {},
      nutritionEstimates: [],
      ingredientLines: [],
      totalTime: '',
      rating: 0,
      images: [{
        hostedLargeUrl: 'http://lorempixel.com/1000/800/animals/',
        imageUrlsBySize: {
          '360': 'http://lorempixel.com/800/600/food/'
        }
      }]
    };



    Formula.getFormula($stateParams.id)
      // Formula.getFormula('Oriental-Inspired-Vegetable-Soup-Recipezaar')
      .then(function (recipeData) {
        remoteRecipe = getUpdatedScopeWithRecipeData($scope, recipeData);
        console.log('getting formula from service', recipeData);
      });

    $scope = getUpdatedScopeWithRecipeData($scope, remoteRecipe);
    console.log('hello', $scope.image, $scope.flavorObject, $scope.totalCaleries);

    $scope.addItemToShoppingList = function (item) {
      ShoppingList.addItem(item);
      $scope.message = 'Added item to list: ' + item;
    };

  }]);

function getUpdatedScopeWithRecipeData(scope, data) {
  // just attach the data to the scope
  // scope.recipe = data would work, but to deal with data inconsistency, we are separating it now
  scope.maxRatings = []
  for (var i = 0; i < data.rating; i++) {
    scope.maxRatings.push({});
  }
  scope.recipe = {};
  scope.recipe.rating = data.rating;
  scope.recipe.name = data.name;
  scope.recipe.ingredientLines = _.uniq(data.ingredientLines);
  scope.recipe.totalTime = data.totalTime;
  scope.recipe.yield = data.yield;
  scope.recipe.nutritionEstimates = data.nutritionEstimates;
  scope.image = 'http://lorempixel.com/800/600/food/';

  // get recipe image
  var remoteImage = data['images'][0]['imageUrlsBySize']['360'];
  console.log('image', remoteImage);
  if (remoteImage && remoteImage !== 'null=s360-c') {
    scope.image = remoteImage;
  }

  // calculate the total caleries
  scope.totalCaleries = Math.floor(data.nutritionEstimates.reduce(function (total, item) {
    total += item.value;
    return total;
  }, 0));

  // process the flavor so we have a bigger number to display
  scope.flavorObject = Object.keys(data.flavors).reduce(function (total, item) {
    total[item] = Math.floor(data.flavors[item] * 100);
    return total;
  }, {});
  console.log('got flavor object', scope.flavorObject);
  return scope;
}

function addToMaxRatings (scope, recipeRating) {
    for (var i = 0; i < recipeRating; i++) {
      scope.maxRatings.push({});
    }
  }
