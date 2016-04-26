angular.module('myApp')
.factory('loginManager', function($http, $state) {

    var factory = {};

        factory.getSessionKey = function(email, password) { //richiede password già criptata

        var data1 = $.param({
            email: email,
            password: password
        });
        var config1 = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
        $http.post('http://its-bitrace.herokuapp.com/api/public/v2/login',
            data1,
            config1)
            .then(
                function(response){
                    sessionStorage.setItem("session", response.data.data.session);
                    $state.go('home');
                },
                function(response){
                    console.log('!ock1')
                }
            );
    }

        factory.getData = function(sessionKey) {
            console.log("I'm getting the data!")
        var config2 = {
            headers: {'x-bitrace-session': sessionKey}
        }
        $http.get('http://its-bitrace.herokuapp.com/api/v2/stores',
            config2)
            .then(
                function(response){
                    console.log('nella chiamata'+response);
                    sessionStorage.setItem('dataItems',JSON.stringify(response));
                },
                function(response){
                    console.log('!ock2')
                });
        }
        return factory;
})