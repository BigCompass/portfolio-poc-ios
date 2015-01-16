app.controller('AuthCtrl', function ($scope, $state, Auth, user) {

	console.log('user before:');
	console.log($scope.user);

	if (user) {
	  $state.go('tab.portfolio');
	}

	console.log($scope.user);

	$scope.logUser = function () {
		console.log($scope.user);
	};

});