App.ReviewThingsRoute = App.ApplicationRoute.extend({
  model: function () {
    return this.store.find('thing');
  }
});