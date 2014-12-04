App.ThingController = Ember.ObjectController.extend({
  needs: ['application'],
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

  actions: {
    destroy: function () {
      if (confirm('Are you sure you want to delete this top thing?')) {
        this.get('model').deleteRecord();
        this.get('model').save();
        this.transitionToRoute('review_things');
      }
    }
  }
});
