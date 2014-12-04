App.EditCategoryController = Ember.ObjectController.extend({

  actions: {
    update: function () {
      this.model.save();
      this.transitionToRoute('category', this.get('id'));
    }
  }
});
