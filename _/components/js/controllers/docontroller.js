app.controller('DataObjectController', function($scope, $rootScope, $http, jsondata)
{
    $scope.data = {};
    $scope.ptElements ={};
    
   jsondata.success(
				function(data, status, headers, config) {
                $scope.data = data;
                    
                    prepareData = function(){
                        var elements=[];
                       for(var i = 0; i< $scope.data.table.length; i++)
                        {
                           // console.log($scope.data.table[i]);
                            //console.log(i + " indecx");
                            for(var j = 0;  j<$scope.data.table[i].elements.length; j++)
                            {
                                 //console.log($scope.data.table[i].elements[j]);
                                //console.log($scope.data.table[i].elements[j].name + " name ");

                                var element = {
                                    "group": $scope.data.table[i].elements[j].group,
                                    "position": $scope.data.table[i].elements[j].position,
                                    "name": $scope.data.table[i].elements[j].name,
                                    "number": $scope.data.table[i].elements[j].number,
                                    "symbol": $scope.data.table[i].elements[j].small,
                                    "molar": $scope.data.table[i].elements[j].molar,
                                    "electrons": $scope.data.table[i].elements[j].electrons,
                                    "url" : $scope.data.table[i].wiki
                                    }

                                elements.push({
                                    "element":element,
                                        "index":j
                                });
                            };
                        }
                        //console.log("moving on");
                        //console.log(elements);
                        //console.log("-----------------------");
                        for(var h = 0; h< $scope.data.lanthanoids.length;h++)
                        {
                            var element = {
                                    "group": $scope.data.lanthanoids[h].group,
                                    "position": $scope.data.lanthanoids[h].position,
                                    "name": $scope.data.lanthanoids[h].name,
                                    "number": $scope.data.lanthanoids[h].number,
                                    "symbol": $scope.data.lanthanoids[h].small,
                                    "molar": $scope.data.lanthanoids[h].molar,
                                    "electrons": $scope.data.lanthanoids[h].electrons,
                                    "url" : "http://en.wikipedia.org/wiki/Lanthanide" //http://en.wikipedia.org/wiki/Actinide 
                                    }

                                elements.push({
                                    "element":element,
                                        "index":h
                                });
                        }
                         //console.log("moving on 2");
                        for(var k = 0; k< $scope.data.lanthanoids.length;k++)
                        {
                            var element = {
                                    "group": $scope.data.actinoids[k].group,
                                    "position": $scope.data.actinoids[k].position,
                                    "name": $scope.data.actinoids[k].name,
                                    "number": $scope.data.actinoids[k].number,
                                    "symbol": $scope.data.actinoids[k].small,
                                    "molar": $scope.data.actinoids[k].molar,
                                    "electrons": $scope.data.actinoids[k].electrons,
                                    "url" : "http://en.wikipedia.org/wiki/Actinide"
                                    }

                                elements.push({
                                    "element":element,
                                        "index":k
                                });
                        }
                        $scope.ptElements = elements;
                        //console.log("done ");
                        //dataReady();
                    };//preparedata
                    
                    

                    
                    prepareData();
                       
                }).error(function(data, status, headers, config) {
			alert('data could not be loaded. epic fail.');
		});
    
});//docontroller