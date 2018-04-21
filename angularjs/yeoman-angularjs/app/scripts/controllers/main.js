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
    var messagesRef = rootRef.child('messages');
    var titleRef = rootRef.child('title');
    
    $scope.currentUser = null;
    $scope.currentText = null;
    $scope.messages = [];
    $scope.title = null;


    /** on() function: Listens for data changes at a particular location.
        This is the primary way to read data from a Database. 
        Your callback will be triggered for the initial data and again whenever the data changes.*/
        /*'value' is a type of event*/

    /*child_added*/
    /*traz todos os filhos de 'messages' no snapshot*/    
    messagesRef.on('child_added', function (snapshot) {
      $timeout(function () {
        var snapshotVal = snapshot.val();
        //console.log(snapshotVal);
        $scope.messages.push({
          user: snapshotVal.user,
          text: snapshotVal.text,
          key: snapshot.key
        });
      });
    });

    messagesRef.on('child_changed', function (snapshot) {
      $timeout(function () {
        var message = findMessageByKey(snapshot.key);
        var snapshotVal = snapshot.val();
        message.text = snapshotVal.text;
      });
    });

    messagesRef.on('child_removed', function (snapshot) {
      $timeout(function () {
        deleteMessageByKey(snapshot.key);
      });
    });

      // recupera o dado da base apenas uma vez, independente se haja ou não alterações
      titleRef.once('value', function(snapshot) {
        $scope.title = snapshot.val();
      })

     $scope.turnFeedOff =  function() {
      messagesRef.off();
      //turn off single browser connection
    };

    function deleteMessageByKey(key) {
      for (let i = 0; i < $scope.messages.length; i++) {
        var currentMessage = $scope.messages[i];
        if(currentMessage.key === key) {
          delete $scope.messages[i];
          break;
        }
      }
    }

    function findMessageByKey(key) {
      var messageFound = null;
      for (let i = 0; i < $scope.messages.length; i++) {
        var currentMessage = $scope.messages[i];
        if(currentMessage.key === key) {
          messageFound = currentMessage;
          break;
        }
      }
      return messageFound;
    }

    $scope.sendMessage = function () {
      
      var newMessage = {
        user: $scope.currentUser,
        text: $scope.currentText
      };

      messagesRef.push(newMessage);


    }

    // $scope.$watch('message.text', function (newVal) {
    //   if(!newVal) {
    //     return;
    //   }
    //   childRef.update({text: newVal});

    // });

    // $scope.setMessage = function () {
    //   childRef.set({
    //     user: 'Mércio',
    //     text: 'Sucesso'
    //   });
    //   console.log('função executada');

    // };

    // $scope.updateMessage = function () {
    //   childRef.update({ text: 'Bye' });
    //   console.log('função executada');
    // }

    // $scope.deleteMessage = function () {
    //   childRef.remove();
    // }
  });
