angular.module('tinnr.shoppingList', [])
  .controller('ShoppingListController', ['$scope', 'ShoppingList', function ($scope, ShoppingList) {
    $scope.shoppingList = ['Lorem ipsum.', 'Lorem ipsum dolor.'];
  }]);
