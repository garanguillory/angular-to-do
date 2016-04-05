var app = angular.module("To-Do", []);

app.controller('todo', ['$scope', function($scope){


	$scope.displayNewToDo = false;
	$scope.displayToDoList = false;
	$scope.displayCompletedList = false;

	$scope.toDoList = [];

	$scope.completedList = [];

	$scope.addItem = function(item){
			$scope.toDoList.push(item);
			$scope.item = '';
			console.log($scope.toDoList);
	};

	$scope.removeItem = function(item){
		var toDo = $scope.toDoList;
		var completed = $scope.completedList;
			toDo.splice(toDo.indexOf(item),1);
			completed.push(item);
			console.log(toDo);
			console.log(completed);
	};

	$scope.incomplete = function(item){
		var toDo = $scope.toDoList;
		var completed = $scope.completedList;
			completed.splice(completed.indexOf(item),1);
			toDo.push(item);
			console.log(completed);
			console.log(toDo);
	};

}]);