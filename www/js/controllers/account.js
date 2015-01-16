app.controller('AccountCtrl', function ($scope, $state, Auth, user) {
	
	if (!Auth.signedIn()) {
		$state.go('start');
	};

	$scope.logout = function () {
	  Auth.logout(user).then(function () {
	    $state.go('start');
	  });
	};
});