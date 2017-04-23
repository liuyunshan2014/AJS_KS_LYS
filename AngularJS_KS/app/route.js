// 添加路由

app.config(['$routeProvider',function( $routeProvider ){
  $routeProvider
  .when('/',{templateUrl: 'view/dynamic.html'})
  .when('/message',{templateUrl: 'view/message.html'})
  .when('/introduction',{templateUrl: 'view/introduction.html'})
  .otherwise({redirectTo:'view/404.html'});
}]);