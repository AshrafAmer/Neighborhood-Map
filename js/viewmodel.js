var viewModel = {

    /* Observable Array, get all data from Locations and assign it to
     * Locations Ko Observable array to use it in UI.
     * => Copies the values of Locations and stores them in 
     * Locations(); observableArray
     * Reference:
     *      http://knockoutjs.com/documentation/observableArrays.html*/
    Locations: ko.observableArray(Locations),
     /*The data-bind attribute tells Knockout that we want to bind the 
     value of this input field to a variable called query, and we want 
     to update that value on keyup. We need to set up query as an observable 
     attribute. For all details about search function check the reference
     Reference :
            1.http://opensoul.org/2011/06/23/live-search-with-knockoutjs 
            2.https://github.com/bkeepers/bkeepers.github.io/blob/master/assets/knockout-demo.html */
    query: ko.observable(),

    search: function(value) {
        viewModel.Locations.removeAll();
        clearMarkers();
        for(var x =0; x < Locations.length; x++) {
            if(Locations[x].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                viewModel.Locations.push(Locations[x]);
                markers[x].setVisible(true);
            }
        }
    }
};

/* This definition of ShowMarkerOnClick which occur when the user click on the
 * item in the list ..
 * Reference:
 *      No Reference Here, I Build this function By Myself :) */
showMarkerOnClick = function(result) {
    //google.maps.event.trigger(markers[this.id],'click');
    
    /* Open LargeInfoWindow Using populateInfoWindow
     * We don't need to build a new function, we already have one^^ */
    populateInfoWindow(markers[this.id], largeInfoWindow);
    map.setCenter(marker.getPosition());
 };

viewModel.query.subscribe(viewModel.search);

ko.applyBindings(viewModel);
