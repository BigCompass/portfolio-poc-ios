app.controller('PortfolioDetailCtrl', function ($scope, $stateParams, Auth, Portfolio, Investment) {
	$scope.portfolio = Portfolio.get($stateParams.portfolioId);

	Portfolio.getInvestments($stateParams.portfolioId).then(function (investments) {
		$scope.portfolio.investments = investments;
	});

	console.log($scope.portfolio);
})