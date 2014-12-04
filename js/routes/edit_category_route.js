App.EditCategoryRoute = App.AuthenticationRoute.extend({
  model: function (params) {
    return this.store.find('category' , params.id);
  }
});
