App.CategoriesRoute = App.ApplicationRoute.extend({
  model: function () {
    return this.store.find('category');
  }
});
