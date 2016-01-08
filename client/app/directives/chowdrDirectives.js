angular.module('tinnr.chowdrDirectives', [])
  .directive('likeButton', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/_alerts.html',
      controller: function ($scope, $rootScope) {
        $scope.alerts = [];

        $scope.closeAlert = function (index) {
          $scope.alerts.splice(index, 1);
        };
      }
    };
  });
