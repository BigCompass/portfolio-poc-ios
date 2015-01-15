angular.module('portfolio.routes', [])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('start', {
				url: '/',
				templateUrl: 'templates/start.html',
				controller: 'AuthCtrl'
			})

			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'templates/tabs.html'
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
			      controller: 'AuthCtrl'
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
			});

			// dash if nothing
			$urlRouterProvider.otherwise('/');
	});