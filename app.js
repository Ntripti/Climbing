var app=angular.module("myApp",[]);
app.factory("MathService",function()
{
	var obj={};
	obj.Multiply=function(x,y)
	{
        var z=parseInt(x)*parseInt(y);
        return z;
	};
	return obj;
});

app.controller("ProductController", function($scope, MathService)
{
	$scope.pname="";
	$scope.price="0";
	$scope.quantity="0";
	$scope.total="";
	
	$scope.f1=function()
	{
    var n =MathService.Multiply($scope.price,$scope.quantity);
	$scope.total="Total Amount: " +n;
	};
});