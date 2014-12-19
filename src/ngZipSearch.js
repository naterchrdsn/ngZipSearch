angular.module("ngZipSearch", []).directive('ngZipSearch', function () {
  // Zip Code Lookup Directive
  // Uses API from http://www.getziptastic.com/
  // @author naterchrdsn (http://naterichardson.com)
  return {
    restrict: 'A',
    require: '?ngModel',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.getZip = function (zip, el) {
        $http.get('http://zip.getziptastic.com/v2/US/' + zip)
        .success(function (result) {
          // Do something with the data here!
          // result.city is the City
          // result.state_short is the 2 digit State
          // Check out the API documentation for details on what else is returned in the JSON response!
        });
      };
    }],
    link: function (scope, element, attrs, ngModel) {
      if (!ngModel) return;
      element.bind('blur', function () {
        scope.getZip(element[0].value, attrs.name);
      });
    }
  };
});