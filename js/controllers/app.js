var app = angular.module('itpnApp',['ngMaterial','ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
    templateUrl : "../templates/main.html"
  	})
  	.when("/login", {
    templateUrl : "../templates/login.html"
  	});
});