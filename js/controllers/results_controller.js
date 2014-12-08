App.ResultsController = Ember.ArrayController.extend({
  sortProperties: ['rank'],
  sortAscending: false, 
  actions: {
    sortToggle: function () {
      this.set('sortAscending', !this.get('sortAscending'));
    }
  }
});
