(function() {
	var app = angular.module('PTApp', ['ngTouch' ]).config(
			router);
    
    var dataObj = [];

	app.controller('PageController', function($scope, $rootScope, $http) {
        //move this to service
		$http.get('_/js/data.json').success(
				function(data, status, headers, config) {
                    
					$scope.dataObj = data;
                    
				}).error(function(data, status, headers, config) {
			alert('data could not be loaded. epic fail.');
		});//error
	});

});
//https://github.com/diniska/chemistry/blob/master/PeriodicalTable/periodicTable.json 
/**
app.factory('jsondata', function($http) { 

    var obj = {content:null};

    $http.get('_/js/data.json').success(
				function(data, status, headers, config) {
        // you can do some processing here
        obj.content = data;
    }).error(function(data, status, headers, config) {
			alert('data could not be loaded. epic fail.');
		});//error 

    return obj;    
});

**/