app.factory('Profile', function ($window, FIREBASE_URL, $firebase, Portfolio, $q) {
	var ref = new $window.Firebase(FIREBASE_URL);

	var profile = {
		get: function (userId) {
			return $firebase(ref.child('profile').child(userId)).$asObject();
		},
		getPortfolios: function (userId) {
		      var defer = $q.defer();

		      $firebase(ref.child('user_portfolios').child(userId))
		        .$asArray()
		        .$loaded()
		        .then(function(data) {
		          var portfolios = {};

		          for(var i = 0; i<data.length; i++) {
		            var value = data[i].$value;
		            portfolios[value] = Portfolio.get(value);
		          }
		          defer.resolve(portfolios);
		        });

		      return defer.promise;
		    }
	};

	return profile;
});