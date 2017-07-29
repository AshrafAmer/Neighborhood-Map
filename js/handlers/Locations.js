/* Then , we we'll make a whole brunches of Locations which
   exist in Neighborhood area */

var Locations = [
    {
        /* Give it a title which will appear
         if we hover over the Marker */
        title: "Cairo Tower",
        /* Get Locations  where the should appear from:
         * https://google-developers.appspot.com/maps/documentation/
         utils/geocoder/#q%3D30.057636%252C31.317558 */
        location: {lat: 30.045915, lng: 31.22429},
        id : 0
    },
    {
        title: "El-Tahrir Square",
        location: {lat: 30.044069, lng: 31.235512},
        id : 1
    },
    {
        title: "Al Azhar Mosque",
        location: {lat: 30.045688, lng: 31.262685},
        id : 2
    },
    {
        title: "The Great Pyramid at Giza",
        location: {lat: 29.979235, lng: 31.134202},
        id : 3
    },
    {
        title: "Great Sphinx of Giza",
        location: {lat: 29.975269, lng: 31.137567},
        id : 4
    }
];