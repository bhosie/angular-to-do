'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

	$scope.todos = [
		{title: "Learn Angular", done: false},
		{title: "take out the trash", done: false}
	];

	
	
	$scope.addItem = function() {
		var text = $scope.itemText;
		
		if(typeof(text) != 'undefined' && text.length > 0){
			$scope.todos.push({title:text, done: false});

			$scope.itemText = "";
		} else {
			alert("Please add something!!");
		}
		
	}


}]);