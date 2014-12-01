App.CategoryRoute = App.ApplicationRoute.extend({
  model: function (params) {
    return this.store.find('recipe');
  }
});

App.CategoryController = Ember.ArrayController.extend({
  queryParams: ['category'],
  category: null,

  moreThanOneFound: function () {
    return this.get('filteredThings').length > 1;
  }.property('filteredThings'),

  filterRecipes: function () {
    var category = this.get('category');
    var things  = this.get('model');

    if(category && category !=='all') {
      return things.filterBy('category', category);
    } else {
      return things;
    }
  }.property('category', 'model')
});
