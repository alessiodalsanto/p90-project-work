angular.module('myApp', [])
.controller('myController', function($scope, $http) {
    var sito1 = 'http://its-bitrace.herokuapp.com/api/public/v2/login';
    var sito2 = 'http://its-bitrace.herokuapp.com/api/v2/stores';

    var data1 = $.param({
        email:'tsac-2015@tecnicosuperiorekennedy.it',
        password:'AkL6KhBcibHLVGZbs/JyBJqMCGB6nDLK/0ovxGZHojt6EepTxpdfygqKsIWz3Q4FS4wyHY4cIrP1W8nHAd8F4A=='
    });
    var config1 = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    $http.post(sito1,
        data1,
        config1)
        .then(
            function(response){
                var session = response.data.data.session;

                var data2 = $.param({});
                var config2 = {
                    headers: {'x-bitrace-session': session}
                }
                $http.get(sito2+'/'+session,
                    data2,
                    config2)
                    .then(
                        function(response){
                            $scope.qualcosa = response;
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


    })