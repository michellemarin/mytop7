App.ReviewThingsController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  actions: {
    sortToggle: function () {
      this.set('sortAscending', !this.get('sortAscending'));
    },
    upvote: function (thing) {
      thing.incrementProperty('rank');
      this.send('shuffle');
      thing.save();
    },
    downvote: function (thing) {
      thing.decrementProperty('rank');
    }
  }
});
