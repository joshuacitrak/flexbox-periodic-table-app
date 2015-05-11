app.controller('EventsController', function($scope, $rootScope, $http, jsondata)
{
    $scope.isLegendOpen = false;
   jsondata.success(
				function(data, status, headers, config) {
                
                    $(".pt-box").click(clickHandler);
                    $(".pt-box").hover(hoverHandler);
                    
                    function clickHandler(evt){
                        console.log("CLICKED");
                        //update main element
                    };     //click handler]\
                    
                    function hoverHandler(evt){
                        console.log("HOVER"+ $(this));
                        //added tooltip
                    };   //hover hanlders      
                    
                    function legendOpenClose()
                    {
                        console.log("OPen/close");
                        $scope.isLegendOpen === !$scope.isLegendOpen;
                        console.log($scope.isLegendOpen + " legend open status");
                    };
                    
                }).error(function(data, status, headers, config) {
			alert('data could not be loaded. epic fail.');
		});
    
});//docontroller