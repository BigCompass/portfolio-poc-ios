app.controller('QuoteCtrl', function ($scope, $http) {
	var LOOKUP_URL = 'http://dev.markitondemand.com/Api/v2/Lookup/jsonp';
	var QUOTE_URL = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp';

	$scope.investment = {
		isValid: false,
		lookup: {}
	};


	$scope.validateSymbol = function() {
		// starts as false for each check
		$scope.investment.isValid = false;
		$scope.investment.lookup = {};

		$http.jsonp(LOOKUP_URL, { params: { input: $scope.investment.symbol, callback: 'JSON_CALLBACK' } })
			.success(function (data) {
				var symbol = $scope.investment.symbol.toUpperCase();
				
				for(var i = 0; i < data.length && !$scope.investment.isValid; i++) {
					
					// match on exact symbol only
					if(data[i].Symbol === symbol) {
						$scope.investment.isValid = true;
						// set lookup
						$scope.investment.lookup = data[i];
					}
				}
			})
			.error(function (e) {
				console.log(e);
		});
	};

	$scope.getQuote = function() {
		// clear display area regardless
		$scope.investment.quoteData = null;

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