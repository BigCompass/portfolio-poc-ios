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

	$scope.createPortfolio = function() {

		var portfolio = {
			creator: $scope.user.email,
			creatorUID: $scope.user.uid,
			name: $scope.newPortfolioName
		};

		console.log(portfolio);

		Portfolio.create(portfolio).then(function() {
			$scope.newPortfolioName = null;
			// get new set of portfolios
			Portfolio.getUserPortfolios($scope.user.uid).then(function (portfolios) {
				$scope.user.portfolios = portfolios;
			});
		});
	};

	$scope.deletePortfolio = function (portfolio) {
		Portfolio.delete(portfolio);
	};

	$scope.logPortfolio = function () {
		console.log(portfolio);
	};
});