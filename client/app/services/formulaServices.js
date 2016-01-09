angular.module('tinnr.formulaServices', [])
  .factory('Formula', ['$http', function ($http) {
    var formula = {};

    formula.getFormula = function (id) {
      return $http({
        method: 'GET',
        url: '/api/formula/' + id
      })
        .then(function (res) {
          // console.log('getting formula from server', res.data);
          return res.data;
        }, function (res) {
          console.error('Error: ', res);
        });
    };
    return formula;
  }]);
