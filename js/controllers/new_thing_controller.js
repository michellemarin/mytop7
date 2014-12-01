App.NewThingController = Ember.Controller.extend({
  actions: {
    save: function () {
      if(!this.get('title')) {
        this.set('errors', 'title can be blank');
        return;
      }
      if(!this.get('description')) {
        this.set('errors', 'description can not be blank');
        return;
      }
      

      var thing = this.store.createRecord('thing', {
        title      : this.get('title'),
        description: this.get('description'),
        category   : this.get('category'),
        imgURL     : this.get('imgURL')
      });
      thing.save();
      this.transitionToRoute('review_things');
    }
  }
});
