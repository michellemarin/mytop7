App.ReviewThingsController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  actions: {
    sortToggle: function () {
      this.set('sortAscending', !this.get('sortAscending'));
    },
    upvote: function (thing) {
      thing.incrementProperty('rank');
      thing.save();
      this.send('shuffle');
    },
    downvote: function (thing) {
      thing.decrementProperty('rank');
    }
  }
});
