app.factory('Investment', function ($firebase, FIREBASE_URL, CHART_URL, LOOKUP_URL, QUOTE_URL, $http) {
	var ref = new Firebase(FIREBASE_URL);
	var investments = $firebase(ref.child('investments')).$asArray();

	var Investment = {
		create: function(investment, portfolioId) {
			return investments.$add(investment).then(function(postRef) {
				$firebase(ref.child('portfolio_investments').child(portfolioId))
					.$push(postRef.name());

				return postRef;
			});
		},
		get: function(investmentId) {
			return $firebase(ref.child('investments').child(investmentId)).$asObject();
		},
		delete: function(investment) {
			return investment.$remove(investment);
		},
		getLookup: function(investmentSymbol) {
			$http.jsonp(LOOKUP_URL, { params: { input: investmentSymbol, callback: 'JSON_CALLBACK' } })
				.success(function (data) {
					console.log(data);
				})
				.error(function (e) {
					console.log(e);
				});
		},
		getQuote: function(investmentSymbol) {
			$http.jsonp(QUOTE_URL, { params: { symbol: investmentSymbol, callback: 'JSON_CALLBACK' } })
				.success(function (data) {
					console.log(data);
				})
				.error(function (e) {
					console.log(e);
				});
		},
		getChart: function(chartObject) {
			$http.jsonp(CHART_URL, {params: { parameters: chartObject, callback: 'JSON_CALLBACK' }})
				.success(function(data) {
					console.log(data);
				})
				.error(function(e) {
					console.log(e);
				});
		}
	};

	return Investment;
});