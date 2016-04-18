angular.module('myApp')
    .controller('detailsController', function($scope, $state, $stateParams, $http){


        var sito2 = 'http://its-bitrace.herokuapp.com/api/v2/stores';
        var config2 = {
            headers: {'x-bitrace-session': session}
        }

        $scope.guid = $stateParams.id;
        console.log($stateParams.id);
        console.log(session);

        $http.get(sito2 + "/"+ $stateParams.id,
            config2)
            .then(
            function(response){
                $scope.negozio = response.data.data;
                console.log('ock2');


            },
            function(response){
                console.log('!ock2')
            });

    });