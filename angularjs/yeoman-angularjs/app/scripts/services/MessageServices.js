'use strict';
(function (angular) {
    angular.module('firebaseApp').service('MessageService', function (config) {
        
        firebase.initializeApp(config);

        var rootRef = firebase.database().ref();
        var messagesRef = rootRef.child('messages');

        this.childAdded = function childAdded(cb) {
            messagesRef.on('child_added', function (snapshot) {
                var val = snapshot.val();
                cb.call(this, {
                    user: val.user,
                    text: val.text,
                    key: snapshot.key
                });
            });

        }
    })
})(window.angular);