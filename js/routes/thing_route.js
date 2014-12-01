App.ThingRoute = App.ApplicationRoute.extend({
  model: function (params) {
    return this.store.find('thing', params.id);
  }
});
