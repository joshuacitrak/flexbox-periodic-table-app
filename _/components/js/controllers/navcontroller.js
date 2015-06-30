app.controller('NavController', function($scope, $location) {
		this.isActive = function(viewLocation)
		{
            var arrStr = $location.path().split("/");//only needs to check the top level
			return viewLocation === arrStr[1]+"/"+arrStr[2] ;		
		};
	});