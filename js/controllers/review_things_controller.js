App.ReviewThingsController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  actions: {
    sortToggle: function () {
      this.set('sortAscending', !this.get('sortAscending'));
    },
    upvote: function (thing) {
      thing.incrementProperty('rank');
      thing.save();
      console.log(thing.get('rank'));
      if (thing.get('rank') > 50) {
      this.transitionToRoute('results');
    } else {
      this.send('shuffle');
      }
    }
  }
});
