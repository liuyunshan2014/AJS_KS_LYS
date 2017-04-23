// 入口文件
var app=angular.module("myapp",['ngRoute']);
app.controller("mainctrl",function($scope){
	$scope.user={'head':'images/a0.jpg','name':'别无所求','job':'IT大牛','address':'石家庄，河北'};
});