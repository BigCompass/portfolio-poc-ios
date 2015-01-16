app.factory('Portfolio', function ($window, $q, $firebase, FIREBASE_URL, Investment) {
	var ref = new Firebase(FIREBASE_URL);
	var portfolios = $firebase(ref.child('portfolios')).$asArray();

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
			$firebase(ref.child('user_portfolios')
						.child(portfolio.creatorUID))
						.$asArray()
						.$loaded()
						.then(function (data) {
							for(var i = 0; i < data.length; i++) {
								if(data[i].$value === portfolio.$id) {
									var fk = new Firebase(FIREBASE_URL +
										'user_portfolios/' +
										 portfolio.creatorUID + '/'
										 data[i].$value);

									console.log(fk);
								}
							}
						});

			// if (fk) { console.log(fk); }
			/*
			return portfolios.$remove(portfolio).then(function() {
				$firebase(ref.child('user_portfolios').child(portfolio.creatorUID)
					.$remove())
			});
			*/
		},
		getInvestments: function (portfolioId) {
			var defer = $q.defer();

			$firebase(ref.child('portfolio_investments').child(portfolioId))
				.$asArray()
				.$loaded()
				.then(function(data) {
					var investments = {};

					for(var i = 0; i < data.length; i++) {
						var value = data[i].$value;
						investments[value] = Investment.get(value);
					}
					defer.resolve(investments);
				});

				return defer.promise;
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
		}
	};

	return Portfolio;
});