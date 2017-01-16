mainApp.controller("CompController", function($scope,$http) {
 
  var url = "data.json";

   $http.get(url).success( function(response) {
      $scope.competency = response; 
   });
   
   
   
    
});