app.controller('AccountCtrl', function ($scope, $state, Auth, user) {
	
	if (!Auth.signedIn()) {
		console.log('not logged in.');
		$state.go('start');
	} else {
		console.log('logged in', user);
	}

	$scope.logout = function () {
		console.log('logging out: ', user);
		Auth.logout(user);
		$state.go('start');
	};
});