app.controller('LegendController', function($scope, $rootScope, $http, jsondata)
{
    $scope.isLegendOpen = false;
   jsondata.success(
				function(data, status, headers, config) {
                   $scope.legendOpenClose = function()
                    {
                       if(!$scope.isLegendOpen)
                       {
                           $(".off-canvas-legend-wrapper").addClass("active");
                       }
                       else
                       {
                           $(".off-canvas-legend-wrapper").removeClass("active");
                       }
                        $scope.isLegendOpen = !$scope.isLegendOpen;
                    };
                    
                });    
});//docontroller