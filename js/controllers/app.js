var app = angular.module('itpnApp',['ngMaterial','ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
    templateUrl : "../templates/main.html"
  	})
  	.when("/clients", {
    templateUrl : "../templates/clients.html"
  	})
  	.when("/key", {
    templateUrl : "../templates/key-executives.html"
  	})
  	.when("/contact-us", {
  		templateUrl : "../templates/contact-us.html"
  	});
});