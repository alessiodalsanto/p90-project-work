angular.module('myApp')
    .controller('homeController', function($scope, $state, loginManager){

        var waiting = null;
        var requestResult = null;
        $scope.data = "";

        if(sessionStorage.getItem('session')!=null) {
            loginManager.getData( sessionStorage.getItem('session') );
            waiting = setInterval(lastSeconds,500);
        } else {
            $state.go('login');
        }

        function lastSeconds() {
            if(requestResult != null){
                $scope.data = requestResult.data.data;
                clearInterval(waiting);
                $scope.$apply();
            }
            requestResult = JSON.parse(sessionStorage.getItem('dataItems'));
        }
        $scope.logout = function() {

            if (sessionStorage.getItem('session') != null) {
                sessionStorage.removeItem('session');
                $state.go('login');
            }

        }
    });