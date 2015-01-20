app.controller('AccountCtrl', function ($scope, $state, Auth, user) {
	$scope.message = 'account controller';

	if (!Auth.signedIn()) {
		$state.go('start');
	}

	$scope.logout = function () {
		console.log('logging out: ', user);
		Auth.logout(user);
		$state.go('start');
	};
});