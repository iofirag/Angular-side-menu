var app = angular.module('app.controllers', [])

app.controller('resultViewerCtrl', function($scope, dataService, $state){
	$scope.init = () => {
		$scope.results = dataService.getResults()
		$scope.stateType = $state.current.name
	}
})
app.controller('templateCtrl', function($scope, dataService) {
    $scope.init = () => {
    	$scope.allMedia = dataService.getCountedMedia()
    }
})