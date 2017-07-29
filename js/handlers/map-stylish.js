/*  This code written by:
        @Ashraf Amer */

var map;

var largeInfoWindow;

/*  Initialized JS function to load the map in my site.
    This initialize function will contain every thing that
    will happen after the page loads, but before the user
    interacts with the map .. Let's Go
*/

function initMap() {
    /*  new map instance here,
        specify 2 things: where in the HTML to load>> in div
        which have id="Neighborhood-Map"
        Reference:
        https://developers.google.com/maps/documentation/javascript/adding-a-google-map */
    map = new google.maps.Map(document.getElementById('Neighborhood-Map'), {
        /* What Part of the world to show
         * this linked with Cairo City */
        center: {lat: 29.975308550323174, lng: 31.13748550415039},
        zoom: 13,
        styles : mapStyle,
        /* mapTypeControl parameter allows the user to change the
        *  map type, So we are disabling that by setting it to false. */
        mapTypeControl: false
    });


    /* Captures the southwest and northeast corner of the
     *  view port */
    var bounds = new google.maps.LatLngBounds();

    largeInfoWindow = new google.maps.InfoWindow();

    /* jshint loopfunc: true */

    /* Then We'll loop through Locations we created in order to
     *  create one marker per location */
    for (var l=0; l< Locations.length; l++) {
        position = Locations[l].location;
        title = Locations[l].title;
        /* This Two: MarkLating and  MarkLnging defined here to used
        * in ajax [3rd party] without error !!
        * Why do that??
        *  #BECAUSE using position return undefined or functions return a, and b*/
        MarkLating = Locations[l].location.lat;
        MarkLnging = Locations[l].location.lng;
        /* Build Our Marker objects in initialize function for our
         Neighborhood locations, each Marker will appear in our map.
         Reference:
         https://developers.google.com/maps/documentation/javascript/markers
         */
        marker = new google.maps.Marker({
            /* where it should appear on ?!*/
            map: map,
            /* where it should appear ?! */
            position: position,
            /* Give it a title which will appear
             if we hover over the Marker */
            title: title,
            icon : defaultMarker,
            MarkLating:MarkLating,
            MarkLnging:MarkLnging,
            animation: google.maps.Animation.DROP
        });


        /* Then we will keep each newly created marker instance
         * in the markers array to keep them organized. */
        markers.push(marker);

        /* Now, we appear an info window when anyone of the
         *  markers is clicked, and content to reflect that
         *  marker.
         * Info Window won't open automatically. So, we need
         * to add Listener to tell it when and where to open */
        marker.addListener('click', function () {
            /* populateInfoWindow is essentially going to tell the
             * inf window to open at that marker, and populate with
             * information specific to that marker. */
            populateInfoWindow(this, largeInfoWindow);
        });

        /* Change Marker Icon colors when hover..
        *  1. build var for default icon */
        var defaultMarker = setMarkerColor('FE7569');

        /* 2. build var which will appear when I hover over
        *  a marker icon*/
        var changeMarker = setMarkerColor('d59563');
        /* 3. define setMarkerColor function markers.js >>..*/


        /* Add two Listener for hover Marker icons:
         * one for mouseover and second for mouseout
         * Reference:
         * Udacity Nanodegree */
        marker.addListener('mouseover',function () {
            this.setIcon(changeMarker);
        });

        marker.addListener('mouseout',function () {
            this.setIcon(defaultMarker);
        });

        /* then we will extend it for every marker that we make. */
        bounds.extend(marker.position);
    }

    /* Finally, we tell the map to fit itself to those bounds */
    map.fitBounds(bounds);
}
