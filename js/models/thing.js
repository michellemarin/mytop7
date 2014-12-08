App.Thing = DS.Model.extend({
  title      : DS.attr('string'),
  category   : DS.attr('number'),
  rank       : DS.attr('number'),
  count      : DS.attr('number'),

  image:function () {
    return (this.get('imgURL') || 'http://i.huffpost.com/gen/1688700/thumbs/o-HAPPY-DOG-DAY-OF-HAPPINESS-facebook.jpg');
  }.property('imgURL'),

  imgURL    : DS.attr('string')
});
