 var mymap = L.map('mapid').setView([51.505, -0.09], 25);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
        id:'mapbox/streets-v11',
     tileSize: 512,
    zoomOffset: -1,
    accessToken: 'R40KmBReKynoWii9zPNecIiNMTulxIdaNh6LcOIZDw4'
 }).addTo(mymap);

var layerGroup = L.layerGroup().addTo(mymap);

function testFunction1(){
   layerGroup.clearLayers();
   mymap.closePopup();
   marker = L.marker([54.856, -110.18795]).addTo(layerGroup);
   marker.bindPopup("Shamim").openPopup();

}