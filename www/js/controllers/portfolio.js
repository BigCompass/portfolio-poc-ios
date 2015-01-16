app.controller('PortfolioCtrl', function ($scope, $state, Auth, Portfolio, Investment) {

	if(Auth.signedIn()) {
		$scope.user = Auth.user;
		// get portfolios from promise
		Portfolio.getUserPortfolios($scope.user.uid).then(function (portfolios) {
			$scope.user.portfolios = portfolios;
		});
	} else {
		$state.go('start');
	}
	

	console.log($scope.user);
	/*
	console.log($scope.user.portfolios);
	console.log($scope.portfolios);
	*/

	$scope.message = 'portfolio controller';
});