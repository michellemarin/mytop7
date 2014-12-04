App.CategoryRoute = App.ApplicationRoute.extend({
  model: function (params) {
    return this.store.find('category', params.id);
  }
});
