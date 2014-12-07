App.ReviewThingsController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  actions: {
    sortToggle: function () {
      this.set('sortAscending', !this.get('sortAscending'));
    },
    upvote: function (thing) {
      thing.incrementProperty('rank');
      thing.save();
      if (thing.get('rank') > 70) {
      this.transitionTo('results');
    } else {
      this.send('shuffle');
      }
    }
  }
});
