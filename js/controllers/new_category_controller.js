App.NewCategoryController = Ember.Controller.extend({

  actions: {
    save: function () {

      if(!this.get('name')) {
        this.set('errors', 'title can not be blank');
        return;
      }

      var category = this.store.createRecord('category', {
        name      : this.get('name'),
    
      });
      category.save();

      this.transitionToRoute('category');
    }
  }
});
