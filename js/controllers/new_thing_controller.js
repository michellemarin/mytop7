App.NewThingController = Ember.Controller.extend({

  actions: {
    save: function () {

      if(!this.get('title')) {
        this.set('errors', 'title can not be blank');
        return;
      }

      var thing = this.store.createRecord('thing', {
        title      : this.get('title'),
        imgURL     : this.get('imgURL')
      });
      thing.save();
      this.set('title', '');
      this.set('imgURL', '');
      var self = this;
      this.store.find('thing').then( function (thing) {
        if (thing.get('length') > 6) {
          self.transitionToRoute('review_things')
          } else {
            self.transitionToRoute('new_thing');
            }
      });


    }
  }
});
