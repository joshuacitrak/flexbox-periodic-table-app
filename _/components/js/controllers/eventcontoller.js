app.controller('EventsController', function($scope, $rootScope, $http, $routeParams, $location, jsondata)
{
   jsondata.success(
				function(data, status, headers, config) {
                
                    $(".pt-box").click(clickHandler);
                    $(".pt-box").hover(hoverHandlerIn, hoverHandlerOut);
                    
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