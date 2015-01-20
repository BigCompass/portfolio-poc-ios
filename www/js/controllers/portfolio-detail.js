app.controller('PortfolioDetailCtrl', function ($scope, $state, $stateParams, Auth, Portfolio, $ionicModal) {
	$scope.portfolio = Portfolio.get($stateParams.portfolioId, Auth.user.uid);
	$scope.investments = Portfolio.investments($stateParams.portfolioId);

	console.log($scope.portfolio);
	console.log($scope.investments);

	$scope.newInvestment = {
		portfolioId: $scope.portfolio.$id
	};

	$scope.addInvestment = function() {

		$scope.investments.$add($scope.newInvestment);
		$scope.closeModal();
		$scope.newInvestment.tickerSymbol = null;
		$scope.newInvestment.qty = null;
	};

	$scope.removeInvestment = function(investment) {
		$scope.investments.$remove(investment);
	};

	$scope.goBack = function () {
		$state.go('tab.portfolio');
	};
	// modal stuff
	$ionicModal.fromTemplateUrl('templates/add-investment-modal.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	  $scope.openModal = function() {
	    $scope.modal.show();
	  };
	  $scope.closeModal = function() {
	    $scope.modal.hide();
	  };
	  //Cleanup the modal when we're done with it!
	  $scope.$on('$destroy', function() {
	    $scope.modal.remove();
	  });
	  // Execute action on hide modal
	  $scope.$on('modal.hidden', function() {
	    // Execute action
	  });
	  // Execute action on remove modal
	  $scope.$on('modal.removed', function() {
	    // Execute action
	  });
})