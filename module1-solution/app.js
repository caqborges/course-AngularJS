(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";

  $scope.verifyItems = function(){
    var totalItems = $scope.items.split(',');

      if (totalItems.length > 3) {
        $scope.message = "Too Much!";
      }else if(totalItems != ""){
        $scope.message = "Enjoy!";
      }else {
        $scope.message = "Please enter data first";
      }
    }
  }
})();
