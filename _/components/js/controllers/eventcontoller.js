app.controller('EventsController', function($scope, $rootScope, $http, $routeParams, $location, $window, jsondata)
{
    $scope.currentElement = {};
   jsondata.success(
				function(data, status, headers, config) {
                
                    $(".pt-box").click(clickHandler);
                    $(".pt-box").dblclick(dblclickHandler);
                    
                    $scope.currentElement.symbol = "H";
                    $scope.currentElement.number= "1";
                    $scope.currentElement.name = "Hydrogen";
                    $scope.currentElement.molar = "1.00794";
                    $scope.currentElement.electrons = "1"; 
                    $scope.currentElement.group = "Non-Metal";
                    $scope.currentElement.url = "https://en.wikipedia.org/wiki/Period_1_element"
                    
                    function clickHandler(evt){
                         //console.log("CLICKED "+  $('.pt-content').index(this));
                        var addClass = $(this).attr("class").match(/pt-box-[\w-]*\b/);
                        var removeClass = $('div.focus-box').attr('class').match(/pt-box-[\w-]*\b/);
                        $('div.focus-box').removeClass(removeClass.toString());
                        $('div.focus-box').addClass(addClass.toString());
                        
                        var theData = $(this).data('element');
                        //split and rejoin the array of electrons adding a space between each
                        var electrons = jQuery.makeArray(theData.electrons).toString();
                        electrons = electrons.split(',').join(', ');
                        console.log(electrons + " -- " + jQuery.type(electrons));
                                        
                        $scope.currentElement.symbol = theData.symbol;
                        $scope.currentElement.number= theData.number;
                        $scope.currentElement.name =theData.name;
                        $scope.currentElement.molar = theData.molar;
                        $scope.currentElement.electrons = electrons; 
                        $scope.currentElement.group = theData.group;
                        $scope.currentElement.url = theData.url;
                        $scope.$apply();
                        //update main element
                    };     //click handler]\
                    
                       function dblclickHandler(evt){
                           var theData = $(this).data('element');
                           $window.open(theData.url, '_blank');
                        //update main element
                    };     //dblclick handler]\
                    
                    $scope.windowWidth = window.innerWidth;
                    $(window).on("resize.doResize", function (){
                    $scope.windowWidth = window.innerWidth;
                    $scope.$apply();
                });//listener
                    

                $scope.$on("$destroy",function (){
                     $(window).off("resize.doResize"); //remove the handler added earlier
                });//destroy
                    
                    $scope.$watch(function(){
                    return $window.innerWidth;
                    }, function(value) {
                        var oldVal = $scope.windowSize;
                    if( value < 767)
                        {
                            $('#warningModal').foundation('reveal', 'open');
                        }
                    });//watch
                 
                }).error(function(data, status, headers, config) {
			alert('data could not be loaded. epic fail.');
		});
    
});//docontroller