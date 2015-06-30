app.controller('LegendController', function($scope, $rootScope, $location, $routeParams, $http, jsondata)
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
                    
                    $scope.switchView = function(path)
                    {
                        if($scope.isLegendOpen)
                       {
                            $scope.legendOpenClose();
                       }
                        $location.path(path);
                    };
                    
                });    
});//docontroller