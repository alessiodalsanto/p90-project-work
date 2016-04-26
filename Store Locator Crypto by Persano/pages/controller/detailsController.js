angular.module('myApp')
    .controller('detailsController', function($scope, $state, $stateParams, $http){

        console.log('sono preciso!')
        var sito2 = 'http://its-bitrace.herokuapp.com/api/v2/stores';
        var config2 = {
            headers: {'x-bitrace-session': sessionStorage.getItem('session')}
        }


        $scope.guid = $stateParams.id;

        $http.get(sito2 + "/"+ $stateParams.id,
            config2)
            .then(
            function(response){
                $scope.negozio = response.data.data;
                initialize();
                console.log('ock2');
            },
            function(response){
                console.log('!ock2')
            });

        function initialize() {
            var store = $scope.negozio;
            console.log(store)
            console.log(store.latitude+' '+store.longitude)
            var storeLocation = new google.maps.LatLng(store.latitude,store.longitude);

            map = new google.maps.Map(document.getElementById('map'), {
                center: storeLocation,
                zoom: 15
            });

            var marker = new google.maps.Marker({
                position: storeLocation,
                map: map,
                title: store.name
            })
        }
    });