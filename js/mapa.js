/* O API DO GOOGLE MAPS É PAGO, NÃO ENCONTREI UM API GRATUITO PARA USAR, MAS SEGUE A PROGRAMAÇÃO ABAIXO,
PARA QUE A PESSOA AO COLOCAR O ENDEREÇO APAREÇA DIRETAMENTE NO MAPA
https://developers.google.com/maps/gmp-get-started (link para comprar o API do Google Maps)

//chamada à API do Google Maps

var geocoder;
var map;
var marker;

function initialize() {
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
    });

    marker.setPosition(latlng);
}

$(document).ready(function() {
    initialize();
});

//Exibindo no mapa o endereço digitado

$(document).ready(function() {

    function carregarNoMapa(endereco) {
        geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();

                    $('#txtEndereco').val(results[0].formatted_address);
                    $('#txtLatitude').val(latitude);
                    $('#txtLongitude').val(longitude);

                    var location = new google.maps.LatLng(latitude, longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(16);
                }
            }
        });
    }
});

//fazemos a chamada dessa função no evento click do botão

$(document).ready(function() {

    $("#btnEndereco").click(function() {
        if ($(this).val() != "")
            carregarNoMapa($("#txtEndereco").val());
    })

    $("#txtEndereco").blur(function() {
        if ($(this).val() != "")
            carregarNoMapa($(this).val());
    })

});

*/