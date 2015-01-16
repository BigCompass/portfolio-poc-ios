app.controller('AccountCtrl', function ($scope, $state, Auth, user) {
	$scope.message = 'account controller';

	$scope.logout = function () {
	  Auth.logout(user).then(function () {
	    $state.go('start');
	  });
	};
});