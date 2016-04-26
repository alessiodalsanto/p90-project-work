angular.module('myApp')
.controller('mapController', function($scope) {
    var map;
    var service;
    var infowindow;

    function initialize() {

        var posMia = null;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                posMia = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
        console.log(posMia);
        var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
        map = new google.maps.Map(document.getElementById('map'), {
            center: posMia,
            zoom: 2
        });

        var stores = JSON.parse( sessionStorage.getItem('dataItems') ).data.data;
        console.log(stores);
        for(var i=0; i<stores.length; i++) {
            var pos = {lat: parseInt(stores[i].latitude), lng: parseInt(stores[i].longitude)};
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: stores[i].name
            });
        }
    }
    initialize();
})


