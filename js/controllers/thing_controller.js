App.ThingController = Ember.ObjectController.extend({
  needs: ['application'],
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

  categoryName: function () {
    var category = App.CATEGORIES.findBy('id', this.get('category'));
    if(category)
      return category.name;
  }.property('category'),

  actions: {
    destroy: function () {
      if (confirm('Are you sure you want to delete this top thing?')) {
        this.get('model').deleteRecord();
        this.get('model').save();
        this.transitionToRoute('review');
      }
    }
  }
});
