app.controller('StartCtrl', function ($scope, $state, Auth) {
	$scope.message = 'start controller';

	if(Auth.signedIn()) {
		$state.go('tab.portfolio');
	}

	$scope.user = Auth.user;

	$scope.login = function () {
		console.log($scope.user);
	  Auth.login($scope.user).then(function () {
	    $state.go('tab.portfolio');
	  }, function (error) {
	    $scope.error = error.toString();
	    console.log(error);
	  });
	};

	$scope.register = function () {
	    Auth.register($scope.user).then(function(user) {
	      return Auth.login($scope.user).then(function() {
	        user.firstName = $scope.user.firstName;
	        return Auth.createProfile(user);
	      }).then(function() {
	        $state.go('tab.portfolio');
	      });
	    }, function(error) {
	      $scope.error = error.toString();
	    });
  	};
});