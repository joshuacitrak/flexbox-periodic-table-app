app.controller('EventsController', function($scope, $rootScope, $http, $routeParams, $location, jsondata)
{
    $scope.currentElement = {};
   jsondata.success(
				function(data, status, headers, config) {
                
                    $(".pt-box").click(clickHandler);
                    $(".pt-box").hover(hoverHandlerIn, hoverHandlerOut);
                    
                    $scope.currentElement.symbol = "Fu";
                    $scope.currentElement.number= "00";
                    $scope.currentElement.name = "Fubar";
                    $scope.currentElement.molar = "0.00";
                    $scope.currentElement.electrons = "[1, 2, 3, 4]"; 
                    $scope.currentElement.group = "FB Group";
                    
                    function clickHandler(evt){
                        //console.log("CLICKED");
                        //update main element
                    };     //click handler]\
                    
                    function hoverHandlerIn(evt){
                        //console.log("HOVER"+ $(this));
                         //$(this).append("<span data-tooltip data-options='hover_delay: 50;' class='has-tip' title='Tooltips are awesome, you should totally use them!'>...</span>");
                        //added tooltip <span data-tooltip data-options="hover_delay: 50;" class="has-tip" title="Tooltips are awesome, you should totally use them!">...</span>
                    };   //hover hanlders      
                    
                    function hoverHandlerOut(evt){
                        //console.log("HOVER OUT"+ $(this));
                         //$(".has-tip").empty();
                        //added tooltip <span data-tooltip data-options="hover_delay: 50;" class="has-tip" title="Tooltips are awesome, you should totally use them!">...</span>
                    };   //hover hanlders                      
                    
                }).error(function(data, status, headers, config) {
			alert('data could not be loaded. epic fail.');
		});
    
});//docontroller