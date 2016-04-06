angular.module('myApp', [])
    .controller('myController', function($scope, $http, $sce) {

        $scope.getDataOld = function() {
            $http({
                method: 'POST',
                url: 'http://incaneva.it/wp-admin/admin-ajax.php?action=incaneva_events&blog=1',
                headers: {'Content-Type': 'application/x-wwww-form-urlencoded'}
            }).then(function(resp) {
                $scope.ris = resp;
            })
        }

        $scope.getData = function() {
            var data = $.param({
                action: 'incaneva_events',
                blog: '1,6,7,8'
            });
            var config = {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'} //application/
            }

            $http.post('http://incaneva.it/wp-admin/admin-ajax.php',
                data,
                config)
                .then(
                    function(response){
                        $scope.ris = response.data.data;
                        pulisci($scope.ris)
                    },
                    function(response){
                        console.log('!ock')
                    }
                );
        }

        function pulisci(array) {
            for(var i=0; i<array.length; i++) {
                array[i].post_content = array[i].post_content.replace('&nbsp;', ' ');

                var sup = array[i].event_type;
                var diocristo = "";
                for(var j = 0; j<sup.length; j++) {
                    console.log(sup[j])
                    diocristo += " "+sup[j];
                }
                array[i].event_type = diocristo;
                console.log('parsed '+diocristo);
            }
            return array;
        }

        $scope.renderHtml = function(testo) {
            return $sce.trustAsHtml(testo);
        }

        $scope.goTo = function(url) {
            window.location.href = url;
        }
    });