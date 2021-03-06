
var ViewModel = function(){
  var self = this;
  self.places = ko.observableArray(markers);
  self.query = ko.observable('');
  
  self.search = ko.computed(function(){
    return ko.utils.arrayFilter(self.places(), function(marker){
      // Check if location matches query
      var match =  marker.title.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
      // Simultaneously update markers on the map
      marker.setVisible(match);
      return match;
    });
  });

  self.showListings = function(){
    showListings();
  };

  self.hideListings = function(){
    hideListings();
  };

  self.selectPlace = function(marker){
    populateInfoWindow(marker, largeInfowindow);
  };

};