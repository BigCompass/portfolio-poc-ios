angular.module('portfolio.routes', [])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('start', {
				url: '/',
				templateUrl: 'templates/start.html',
				controller: 'StartCtrl',
				resolve: {
				    user: function(Auth) {
				      return Auth.resolveUser();
				    }
			  	}
			})

			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'templates/tabs.html',
				resolve: {
				    user: function(Auth) {
				      return Auth.resolveUser();
				    }
			  	}
			})

			.state('tab.quote', {
			  url: '/quote',
			  views: {
			    'tab-quote': {
			      templateUrl: 'templates/tab-quote.html',
			      controller: 'QuoteCtrl'
			    }
			  }
			})

			.state('tab.account', {
			  url: '/account',
			  views: {
			    'tab-account': {
			      templateUrl: 'templates/tab-account.html',
			      controller: 'AccountCtrl'
			    }
			  },
			  	resolve: {
			  	    user: function(Auth) {
			  	      return Auth.resolveUser();
			  	    }
			    }
			})

			.state('tab.portfolio', {
			  url: '/portfolios',
			  views: {
			    'tab-portfolio': {
			      templateUrl: 'templates/tab-portfolio.html',
			      controller: 'PortfolioCtrl'
			    }
			  }
			})
			.state('tab.portfolio-detail', {
				url: '/portfolios/:portfolioId',
				views: {
					'tab-portfolio': {
						templateUrl: 'templates/portfolio-detail.html',
						controller: 'PortfolioDetailCtrl'
					}
				}
			});

			// dash if nothing
			$urlRouterProvider.otherwise('/');
	});