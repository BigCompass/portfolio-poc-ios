app.factory('Portfolio', function ($window, $q, $firebase, FIREBASE_URL, Investment) {
	var ref = new Firebase(FIREBASE_URL);
	var portfolios = $firebase(ref.child('portfolios')).$asArray();
	var user_portfolios = $firebase(ref.child('user_portfolios')).$asArray();

	var Portfolio = {
		create: function (portfolio) {
			return portfolios.$add(portfolio).then(function(portfolioRef) {
				$firebase(ref.child('user_portfolios').child(portfolio.creatorUID))
					.$push(portfolioRef.name());
			});
		},
		get: function (portfolioId) {
			return $firebase(ref.child('portfolios').child(portfolioId)).$asObject();
		},
		delete: function (portfolio) {
			return 
		},
		investments: function (portfolioId) {
			return $firebase(ref.child('investments').child(portfolioId)).$asArray();
		},
		getUserPortfolios: function (userId) {

			var defer = $q.defer();

			$firebase(ref.child('user_portfolios').child(userId))
				.$asArray()
				.$loaded()
				.then(function (data) {
					var portfolios = {};

					for(var i = 0; i < data.length; i++) {
						var value = data[i].$value;
						portfolios[value] = Portfolio.get(value);
					}

					defer.resolve(portfolios);
				});

				return defer.promise;
		},
		userPortfolios: function (userId) {
			return $firebase(ref.child('portfolios').child(userId)).$asArray();
		}
	};

	return Portfolio;
});