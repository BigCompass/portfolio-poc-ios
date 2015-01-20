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
		get: function (portfolioId, userId) {
			return $firebase(ref.child('portfolios').child(userId).child(portfolioId)).$asObject();
		},
		delete: function (portfolio) {
			return 
		},
		investments: function (portfolioId) {
			return $firebase(ref.child('investments').child(portfolioId)).$asArray();
		},
		userPortfolios: function (userId) {
			return $firebase(ref.child('portfolios').child(userId)).$asArray();
		}
	};

	return Portfolio;
});