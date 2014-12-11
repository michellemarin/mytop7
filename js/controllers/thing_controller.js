App.ThingController = Ember.ObjectController.extend({
  needs: ['application'],
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

  categoryName: function () {
    var self = this;
    var cat = App.CATEGORIES.filter( function (category) {
      return category.id == self.get('category');
    });

    if (cat[0]) {
      return cat[0].name
    }
  }.property('category'),

  resources: function () {
    var self = this;
    var res = App.RESOURCES.filter( function (resource) {
      return resource.categoryID == self.get('category');
    });
    return res;
  }.property('category'),

  actions: {
    destroy: function () {
      if (confirm('Are you sure you want to delete this top thing?')) {
        this.get('model').deleteRecord();
        this.get('model').save();
        this.transitionToRoute('results');
      }
    }
  }
});
