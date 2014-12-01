App.NewThingIndexRoute = App.AuthenticationRoute.extend({
  model: function () {
    return this.store.find('thing');
  }
});
