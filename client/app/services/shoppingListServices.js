// we'll delete this later once we move the storage to server side 
function checkIsLocalStorageSupported() {
  if (typeof (Storage) !== undefined) {
    return true;
  }
  alert('sorry, local storage not supported, we can not store the list');
  return false;
}

angular.module('tinnr.shoppingListServices', [])
  .factory('ShoppingList', ['$http', function ($http) {
    var shoppingList = {};
    shoppingList.addListItem = function (item) {
      if (checkIsLocalStorageSupported()) {
        var oldStorage = localStorage.getItem('shoppingList') || [];
        oldStorage.push(item);
        localStorage.setItem('shoppingList', oldStorage);
      }
    };

    shoppingList.addAllToList = function (items) {
      if (checkIsLocalStorageSupported()) {
        var oldStorage = localStorage.getItem('shoppingList') || [];
        oldStorage.concat(items);
        localStorage.setItem('shoppingList', oldStorage);
      }
    };

    shoppingList.getShoppingList = function () {
      if (checkIsLocalStorageSupported()) {
        return localStorage.getItem('shoppingList') || [];
      }
    };
    return shoppingList;
  }]);
