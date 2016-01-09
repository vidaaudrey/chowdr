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


// var recipe = {
//   "attribution": {
//     "html": "<a href='http://www.yummly.com/recipe/Hot-Turkey-Salad-Sandwiches-Allrecipes'>Hot Turkey Salad Sandwiches recipe</a> information powered by <img src='http://static.yummly.com/api-logo.png'/>",
//     "url": "http://www.yummly.com/recipe/Hot-Turkey-Salad-Sandwiches-Allrecipes",
//     "text": "Hot Turkey Salad Sandwiches recipes: information powered by Yummly",
//     "logo": "http://static.yummly.com/api-logo.png"
//   },
//   "ingredientLines": [
//     "2 cups diced cooked turkey",
//     "2 celery ribs, diced",
//     "1 small onion, diced",
//     "2 hard-cooked eggs, chopped",
//     "3/4 cup mayonnaise",
//     "1/2 teaspoon salt",
//     "1/4 teaspoon pepper",
//     "6 hamburger buns, split"
//   ],
//   "flavors": {
//     "Salty": 0.004261637106537819,
//     "Meaty": 0.0019220244139432907,
//     "Piquant": 0,
//     "Bitter": 0.006931612268090248,
//     "Sour": 0.009972159750759602,
//     "Sweet": 0.0032512755133211613
//   },
//   "nutritionEstimates": [{
//     "attribute": "ENERC_KCAL",
//     "description": "Energy",
//     "value": 317.4,
//     "unit": {
//       "name": "calorie",
//       "abbreviation": "kcal",
//       "plural": "calories",
//       "pluralAbbreviation": "kcal"
//     }
//   }, {
//     "attribute": "FAT",
//     "description": "Total lipid (fat)",
//     "value": 13.97,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "FASAT",
//     "description": "Fatty acids, total saturated",
//     "value": 2.7,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "CHOLE",
//     "description": "Cholesterol",
//     "value": 0.11,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "NA",
//     "description": "Sodium, Na",
//     "value": 0.66,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "K",
//     "description": "Potassium, K",
//     "value": 0.2,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "CHOCDF",
//     "description": "Carbohydrate, by difference",
//     "value": 29.92,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "FIBTG",
//     "description": "Fiber, total dietary",
//     "value": 1.3,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "SUGAR",
//     "description": "Sugars, total",
//     "value": 5.25,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "PROCNT",
//     "description": "Protein",
//     "value": 17.6,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "VITA_IU",
//     "description": "Vitamin A, IU",
//     "value": 159.13,
//     "unit": {
//       "name": "IU",
//       "abbreviation": "IU",
//       "plural": "IU",
//       "pluralAbbreviation": "IU"
//     }
//   }, {
//     "attribute": "VITC",
//     "description": "Vitamin C, total ascorbic acid",
//     "value": 0,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "CA",
//     "description": "Calcium, Ca",
//     "value": 0.08,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }, {
//     "attribute": "FE",
//     "description": "Iron, Fe",
//     "value": 0,
//     "unit": {
//       "name": "gram",
//       "abbreviation": "g",
//       "plural": "grams",
//       "pluralAbbreviation": "grams"
//     }
//   }],
//   "images": [{
//     "hostedLargeUrl": "http://i2.yummly.com/Hot-Turkey-Salad-Sandwiches-Allrecipes.l.png",
//     "hostedSmallUrl": "http://i2.yummly.com/Hot-Turkey-Salad-Sandwiches-Allrecipes.s.png"
//   }],
//   "name": "Hot Turkey Salad Sandwiches",
//   "yield": "6 servings",
//   "totalTime": "30 Min",
//   "attributes": {
//     "holiday": [
//       "Christmas",
//       "Thanksgiving"
//     ],
//     "cuisine": [
//       "Italian",
//       "Soul food",
//       "American"
//     ]
//   },
//   "totalTimeInSeconds": 1800,
//   "rating": 4.44,
//   "numberOfServings": 6,
//   "source": {
//     "sourceRecipeUrl": "http://allrecipes.com/Recipe/hot-turkey-salad-sandwiches/detail.aspx",
//     "sourceSiteUrl": "http://www.allrecipes.com",
//     "sourceDisplayName": "AllRecipes"
//   },
//   "id": "Hot-Turkey-Salad-Sandwiches-Allrecipes"
// }
