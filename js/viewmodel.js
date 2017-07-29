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
        for(var x in Locations) {
            if(Locations[x].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                viewModel.Locations.push(Locations[x]);
            }
            
        }
    }
};

/* This definition of ShowMarkerOnClick which occur when the user click on the
 * item in the list ..
 * Reference:
 *      No Reference Here, I Build this function By Myself :) */
ShowMarkerOnClick = function(result) {
    //google.maps.event.trigger(markers[this.id],'click');
    
    /* Open LargeInfoWindow Using populateInfoWindow
     * We don't need to build a new function, we already have one^^ */
    populateInfoWindow(markers[this.id], largeInfoWindow);
 };

viewModel.query.subscribe(viewModel.search);

ko.applyBindings(viewModel);

/* History ==> The next function will done well with select2 library
 * BUT after I asked about using it in Udacity Forum :
 https://discussions.udacity.com/t/using-select2-library/320024/2
 
 * I know that Knockout must be used to handle list, filter, 
 * and any other information on the page that is subject to changing state, 
 
 * So, I commented it and build another one above Met specification  >_<

$(".MarkerOnClick").select2(
    ({
        data: neighborhoodLocations.title
    })
).on("select2:select", function (e) {
    var selected_element = $(e.currentTarget);
    var select_val = selected_element.val();
    for(var i=0; i<Locations.length; i++){
        if(select_val == Locations[i].title){
            var x = Locations[i].id;
            populateInfoWindow(markers[x], largeInfoWindow);
        }
    }
});  */