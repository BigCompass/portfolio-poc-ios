angular.module('portfolio.routes', [])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('start', {
				url: '/',
				templateUrl: 'templates/start.html',
				controller: 'AuthCtrl'
			})

			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'AuthCtrl'
			})

			.state('register', {
				url: '/register',
				templateUrl: 'templates/register.html',
				controller: 'AuthCtrl'
			})

			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'templates/tabs.html'
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