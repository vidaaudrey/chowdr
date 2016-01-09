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

    shoppingList.addItem = function (item) {
      if (checkIsLocalStorageSupported()) {
        var oldStorage = JSON.parse(localStorage.getItem('shoppingList') || '[]');
        oldStorage.push(item);
        localStorage.setItem('shoppingList', JSON.stringify(oldStorage));
      }
    };

    shoppingList.addAll = function (items) {
      if (checkIsLocalStorageSupported()) {
        var oldStorage = JSON.parse(localStorage.getItem('shoppingList') || '[]');
        oldStorage.concat(items);
        localStorage.setItem('shoppingList', JSON.stringify(oldStorage));
      }
    };

    shoppingList.getList = function () {
      if (checkIsLocalStorageSupported()) {
        return JSON.parse(localStorage.getItem('shoppingList') || '[]');
      }
    };

    shoppingList.removeAll = function (items) {
      if (checkIsLocalStorageSupported()) {
        localStorage.setItem('shoppingList', '[]');
      }
    };

    shoppingList.removeItem = function (item) {
      if (checkIsLocalStorageSupported()) {
        var oldStorage = JSON.parse(localStorage.getItem('shoppingList') || '[]');
        var index = oldStorage.indexOf(item);
        if (index !== -1) {
          oldStorage.splice(index, 1);
          localStorage.setItem('shoppingList', JSON.stringify(oldStorage));
        }
      }
    };


    return shoppingList;
  }]);
