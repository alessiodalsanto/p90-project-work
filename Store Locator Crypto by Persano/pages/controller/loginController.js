angular.module('myApp')
    .controller('loginController', function($scope, $state, $http, loginManager){

        $scope.email="";
        $scope.password="";
        $scope.showForm=true;

        var sito1 = 'http://its-bitrace.herokuapp.com/api/public/v2/login';
        $scope.login=function() {
            $scope.message = "Loading all these magnificent features";
            $scope.showSpinner = true;
            $scope.showForm = false;

            var hash = CryptoJS.SHA512($scope.password);
            var hash_Base64 = hash.toString(CryptoJS.enc.Base64);
            loginManager.getSessionKey($scope.email, hash_Base64);


            /*
            var data1 = $.param({
                email: $scope.email,
                password: hash_Base64

            });
            var config1 = {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }

            $http.post(sito1,
                data1,
                config1)
                .then(
                    function (response) {
                        if(response.data.success)
                            sessionStorage.setItem('session',response.data.data.session);
                        else
                            alert(response.data.errorCode+" "+response.data.errorMessage)
                    }
                );*/
        }

    });