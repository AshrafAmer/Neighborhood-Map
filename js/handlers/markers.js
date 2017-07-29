/* Add a blank of markers array globally */
var markers = [];

/* 3rd. define setMarkerColor function here >>..*/
function setMarkerColor(togglecolor){
    var IconColor = new google.maps.MarkerImage(
        'https://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + togglecolor + '|40|_|%E2%80%A2',
        new google.maps.Size(25, 38),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(25,38)
    );
        return IconColor;
}