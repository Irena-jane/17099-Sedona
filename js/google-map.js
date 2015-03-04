google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(34.857764,-111.782771),
            zoom: 12,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('sedona-map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Sedona', 'undefined', 'undefined', 'undefined', 'undefined', 34.8697395, -111.76098960000002, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];
        for (i = 0; i < locations.length; i++) {
            var description = (locations[i][1] =='undefined')?'':locations[i][1];
            var telephone = (locations[i][2] =='undefined')?'':locations[i][2];
            var email = (locations[i][3] =='undefined')?'':locations[i][3];
            var web = (locations[i][4] =='undefined')?'':locations[i][4];
            var markericon = (locations[i][7] =='undefined')?'':locations[i][7];

            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });

var link = '';     }

}