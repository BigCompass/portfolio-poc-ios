app.controller('QuoteCtrl', function ($scope, $http) {
	var QUOTE_URL = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp';

	$scope.investment = {};

	$scope.getQuote = function() {
		console.log($scope.investment.symbol);

		$http.jsonp(QUOTE_URL, { params: { symbol: $scope.investment.symbol, callback: 'JSON_CALLBACK' } })
			.success(function (data) {
				$scope.investment.quoteData = data;
				console.log(data);
			})
			.error(function (e) {
				console.log(e);
		});
	};
});