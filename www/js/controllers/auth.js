app.controller('AuthCtrl', function ($scope, $state, Auth, user) {

	if (user) {
	  $state.go('tab.portfolio');
	}

	$scope.logUser = function () {
		console.log($scope.user);
	};

});