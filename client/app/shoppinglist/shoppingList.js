angular.module('tinnr.shoppingList', [])
  .controller('ShoppingListController', ['$scope', 'ShoppingList', function ($scope, ShoppingList) {
    ShoppingList.removeAll();
    ShoppingList.addItem('a new list item here...');
    $scope.shoppingList = _.unique(ShoppingList.getList());

    $scope.message = '';

    $scope.removeItem = function (item) {
      ShoppingList.removeItem(item);
      $scope.shoppingList = _.unique(ShoppingList.getList());
      $scope.message = item + 'is removed';
    };

    $scope.removeAll = function () {
      ShoppingList.removeAll();
      $scope.shoppingList = _.unique(ShoppingList.getList());
      $scope.message = 'removed all';

    };

  }]);
