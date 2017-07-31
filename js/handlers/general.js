/* we will define a separate populateInfoWindow function,
 * passing in the marker that was clicked, which is, this.
 * and the info window that we created on .. */

function populateInfoWindow(marker, infowindow) {
    /* Creating a new info window instance only requires that
        we put some content into the info window ..
        Reference:
            https://developers.google.com/maps/documentation/javascript/infowindows */
    infowindow.marker = marker;

    var Timeout = 3000;
    
    /* Take a Google image for the Location, where
        MarkLating: return lat,andresponse
        marker.MarkLnging: return lng */
    var MarkUrl = 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' +
        marker.MarkLating + ',' + marker.MarkLnging + '&fov=90&heading=235&pitch=10';

    /* Using Wikimedia API for search, 
     * Reference: 
     *      lesson 2: Build the Move Planner App, 7.Quiz: Wikipedia API */
    var WikiUurl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title +
    '&format=json&callback=wikiCallback';

    $.ajax({
        url:WikiUurl,
        dataType: "jsonp",
        success: function(response){
            var url;
            var articleList = response[1];
            for (var i=0; i< articleList.length; i++) {
                var articleStr = articleList[i];
                url = 'http://en.wikipedia.org/wiki/' + articleStr;
            }
            if(url){
                infowindow.setContent(
                    '<div class="contain widthfull">' +
                        /* Create h3 element for Location Title */
                    '<h3>' + marker.title + '</h3>' +
                    /*Create new div for Articles Here .. */
                    '<h5> For More Information <a href="'+ url +'"> click Here</a></h5>' +
                        /* Add image you get from url*/
                    '<img class="img-rounded img-responsive" src="' + MarkUrl + 
                    '" alt="This Image from google street view for '+ marker.title+'"/>' +
                    '</div>'
                  );
            }
            else {
                infowindow.setContent(
                    '<div class="contain widthfull">' +
                        /* Create h3 element for Location Title */
                    '<h3>' + marker.title + '</h3>' +
                    '<h5 style="color:red"> NO Wikipedia Articles about this place >_< </h5>' +
                        /* Add image you get from url*/
                    '<img class="img-rounded img-responsive" src="' + MarkUrl + 
                    '" alt="This Image from google street view for '+ marker.title+'"/>' +
                    '</div>'
                  );
            }
        },
        error: ErrorLoad
    });

    infowindow.open(map, marker);

    marker.setAnimation(google.maps.Animation.BOUNCE);

    setTimeout(function () {
        marker.setAnimation(null);
    }, Timeout);
    
    infowindow.addListener('closeclick', function () {
        infowindow.setMarker = null;
    });

}

/* If an API doesn’t load there should be some visible indication on the page
(an alert box is ok) that it didn’t load.*/
function ErrorLoad() {
    alert('An error occur >_< ');
}

/* To clear Markers By search 
Reference :
    https://developers.google.com/maps/documentation/
            javascript/examples/marker-animations-iteration*/
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setVisible(false);
    }
}
