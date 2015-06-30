//var myApp = angular.module('myApp',  ['appControllers']);

//var appControllers = angular.module('appControllers', []);

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
	var app = angular.module('ptApp', [ 'ngRoute', 'ngAnimate', 'ngTouch', 'appControllers' ]).config(
			router);

	function router($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
		$routeProvider.when('/chart', {
			templateUrl : 'partials/chart.html'
		}).when('/list', {
			templateUrl : 'partials/table.html'
		}).otherwise({
			redirectTo : '/chart'
		});
	}
    var appControllers = angular.module('appControllers', []);

app.factory('jsondata', function($http) { 

    var obj = {content:null};

    return $http.get('_/components/js/periodicTable.json');
});