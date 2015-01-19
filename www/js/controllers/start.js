app.controller('StartCtrl', function ($scope, $state, Auth) {

	console.log(Auth.signedIn(), Auth.user);

	if(Auth.signedIn()) {
		$state.go('tab.portfolio');
	}

	$scope.loginUser = {};
	$scope.registerUser = {};

	$scope.login = function () {
	  Auth.login($scope.loginUser).then(function () {
	    $state.go('tab.portfolio');
	  }, function (error) {
	    $scope.error = error.toString();
	    console.log(error);
	  });
	};

	$scope.register = function () {
	    Auth.register($scope.registerUser).then(function(user) {
	      return Auth.login($scope.registerUser).then(function() {
	        user.firstName = $scope.registerUser.firstName;
	        return Auth.createProfile(user);
	      }).then(function() {
	        $state.go('tab.portfolio');
	      });
	    }, function(error) {
	      $scope.error = error.toString();
	    });
  	};
});