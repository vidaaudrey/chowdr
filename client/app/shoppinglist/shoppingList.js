angular.module('tinnr.shoppingList', [])
  .controller('ShoppingListController', ['$scope', 'ShoppingList', function ($scope, ShoppingList) {
    // ShoppingList.removeAll();

    $scope.shoppingList = _.unique(ShoppingList.getList());

    $scope.message = '';

    $scope.removeItem = function (item) {
      ShoppingList.removeItem(item);
      $scope.shoppingList = _.unique(ShoppingList.getList());
      $scope.message = item + 'is removed from your list';
    };

    $scope.removeAll = function () {
      ShoppingList.removeAll();
      $scope.shoppingList = _.unique(ShoppingList.getList());
      $scope.message = 'Removed all';
    };

  }]);
