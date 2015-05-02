angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, $stateParams, Loader) {
	$scope.tasks = [
	{ 	id : 1,
		title : "One",
		owner : "Mr White",
		deadline : "03/05/2015",
		description : "One one one"
	},
	{ 	id : 2,
		title : "Two",
		owner : "Mr Blue",
		deadline : "Today",
		description : "Two to too"
	}
	];

	$scope.showAllTasks = function () {
		Loader.loadAllTasks( function (data, status) {
			if (status == "Success") {
				$scope.tasks = data.tasks; // Faut trouver les tasks
			} else if (status == "Error") {
				console.log("Error");
			}
		});

		for (var i = 0; i< $scope.tasks.length; i++)
			$scope.tasks[i].id = i;
	}

	$scope.showMyTasks = function () {
		Loader.loadAllTasks ( function (data, status) {
			if (status == "Success") {
				for (var i = 0; i < data.tasks.length ; i++) {
					if (data.tasks[i].owner != window.username)
				}
			} else if (status == "Error") {
				console.log("Error");
			}
		})
	}

	$scope.getTask = function () {
		$scope.task = $scope.tasks[$stateParams.taskId];
	}
})

.controller('LoginCtrl', function($scope) {
	var isConnected = false;

	var user = {
		username : $scope.username,
		firstName : $scope.firstName,
		lastName : $scope.lastName,
		email : $scope.email,
		password : $scope.password
	}

	$scope.doLogin = function () {
		Logger.doLogin($scope.email, $scope.password, function (data, status) {
			if (status == "Success") {
				isConnected = true;
				window.username = data.user.username;
			} else if (status == "Error") {
				console.log("Error");
			}
		});
	}

	$scope.doSignup = function () {
		Logger.doSignup(user, function (data, status) {
			if (status == "Success") {
				console.log("User registered")
			} else if (status == "Error") {
				console.log("Error");
			}
		});
	}
})

.controller('ProfileCtrl', function($scope) {

});
