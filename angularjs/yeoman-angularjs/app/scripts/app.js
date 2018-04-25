'use strict';

/**
 * @ngdoc overview
 * @name firebaseApp
 * @description
 * # firebaseAppApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant("config",{
    apiKey: "AIzaSyD_RJeXxSxpw7LXZ5RWK_zUWwGXR7nv3M4",
    authDomain: "projeto-teste-7dcf3.firebaseapp.com",
    databaseURL: "https://projeto-teste-7dcf3.firebaseio.com"
});
