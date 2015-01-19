app.controller('PortfolioCtrl', function ($scope, $state, Auth, Portfolio, Investment) {

	if(Auth.signedIn()) {
		$scope.user = Auth.user;
		$scope.user.portfolios = Portfolio.userPortfolios($scope.user.uid);
		console.log($scope.user.portfolios);
	} else {
		$state.go('start');
	}

	$scope.addPortfolio = function() {

		var portfolio = {
			creator: $scope.user.email,
			creatorUID: $scope.user.uid,
			name: $scope.newPortfolioName
		};

		console.log(portfolio);

		$scope.user.portfolios.$add(portfolio);

		$scope.newPortfolioName = null;
	}

	$scope.deletePortfolio = function (portfolio) {
		$scope.user.portfolios.$remove(portfolio);
	};

	$scope.logPortfolio = function () {
		console.log(portfolio);
	};
});