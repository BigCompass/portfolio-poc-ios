angular.module('portfolio.controllers', [])

.controller('AuthCtrl', function ($scope) {
	$scope.message = 'auth controller';
})

.controller('PortfolioCtrl', function ($scope) {
	$scope.message = 'portfolio controller';
});