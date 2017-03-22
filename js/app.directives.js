var app = angular.module('app.directives', [])

app.directive('post', function() {
    return {
    	restrict : 'EA',
    	scope: {
	      res: '='
	    },
        templateUrl : '../pages/post.directive.html'
    }
})