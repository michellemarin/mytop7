App.EditThingController = Ember.ObjectController.extend({

  actions: {
    update: function () {
      this.model.save();
      this.transitionToRoute('thing', this.get('id'));
    }
  }
});
