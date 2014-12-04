App.CategoriesController = Ember.ObjectController.extend({
  needs: ['application'],
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

  actions: {
    destroy: function () {
      if (confirm('Are you sure you want to delete this category?')) {
        this.get('model').deleteRecord();
        this.get('model').save();
        this.transitionToRoute('category');
      }
    }
  }
});
