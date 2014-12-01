App.EditThingRoute = App.AuthenticationRoute.extend({
  model: function (params) {
    return this.store.find('thing' , params.id);
  }
});
