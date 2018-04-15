'use strict';

/**
 * @ngdoc function
 * @name firebaseAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseAppApp
 */
angular.module('firebaseAppApp')
  .controller('MainCtrl', function ($scope) {
      //**Forma antiga de instanciar o objeto firebase
      // var rootRef = new Firebase('https://projeto-teste-7dcf3.firebaseio.com/');
      // var childRef = rootRef.child('message'); */
      
      var config = {
        apiKey: "AIzaSyD_RJeXxSxpw7LXZ5RWK_zUWwGXR7nv3M4",
        authDomain: "projeto-teste-7dcf3.firebaseapp.com",
        databaseURL: "https://projeto-teste-7dcf3.firebaseio.com"
      };
      
      firebase.initializeApp(config);

      var rootRef = firebase.database().ref();
      var childRef = rootRef.child('message');
      $scope.setMessage = function() {
        childRef.set({
          user: 'Mércio',
          text: 'Sucesso'
        });
        console.log('função executada');
        
      };
  });
