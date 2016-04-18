
angular.module('myApp')
    .controller('homeController', function($scope, $state, $http){

        var hash = CryptoJS.SHA512("tsac");
        var hash_Base64 = hash.toString(CryptoJS.enc.Base64);
        $scope.code = hash_Base64;



        var sito1 = 'http://its-bitrace.herokuapp.com/api/public/v2/login';
        var sito2 = 'http://its-bitrace.herokuapp.com/api/v2/stores';

        var data1 = $.param({
            email:'tsac-2015@tecnicosuperiorekennedy.it',
            password:hash_Base64

        });
        var config1 = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }



        $http.post(sito1,
            data1,
            config1)
            .then(
                function(response){
                    session = response.data.data.session;



                    var config2 = {
                        headers: {'x-bitrace-session': session}
                    }


                    $http.get(sito2,
                        config2)
                        .then(
                            function(response){
                                $scope.qualcosa = response.data.data;
                                console.log('ock2');
                            },
                            function(response){
                                console.log('!ock2')
                            });


                },
                function(response){
                    console.log('!ock1')
                }
            );
    });