app.controller('PortfolioDetailCtrl', function ($scope, $stateParams, Auth, Portfolio, Investment) {
	$scope.portfolio = Portfolio.get($stateParams.portfolioId);
	$scope.investments = Portfolio.investments($stateParams.portfolioId);

	console.log($scope.portfolio);
	console.log($scope.investments);

	$scope.addInvestment = function() {
		var newInvestment = {
			portfolioId: $scope.portfolio.$id,
			tickerSymbol: $scope.tickerSymbol
		};

		$scope.investments.$add(newInvestment);

		$scope.tickerSymbol = null;
	};
})