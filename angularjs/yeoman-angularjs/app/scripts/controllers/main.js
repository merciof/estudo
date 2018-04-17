'use strict';

/**
 * @ngdoc function
 * @name firebaseAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseAppApp
 */
angular.module('firebaseAppApp')
  .controller('MainCtrl', function ($scope, $timeout) {
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

    /** on() function: Listens for data changes at a particular location.
        This is the primary way to read data from a Database. 
        Your callback will be triggered for the initial data and again whenever the data changes.*/
    childRef.on('value'/*'value' is a type of event*/, function (snapshot) {
      $timeout(function () {
        var snapshotVal = snapshot.val();
        console.log(snapshotVal);
        $scope.message = snapshotVal;
      });
    });

    $scope.$watch('message.text', function (newVal) {
      if(!newVal) {
        return;
      }
      childRef.update({text: newVal});

    });

    $scope.setMessage = function () {
      childRef.set({
        user: 'Mércio',
        text: 'Sucesso'
      });
      console.log('função executada');

    };

    $scope.updateMessage = function () {
      childRef.update({ text: 'Bye' });
      console.log('função executada');
    }

    $scope.deleteMessage = function () {
      childRef.remove();
    }
  });
