App.Thing = DS.Model.extend({
  title      : DS.attr('string'),
  description: DS.attr('string'),
  category   : DS.attr('number'),

  markedDescription:function () {
    return marked(this.get('description') || '');
  }.property('description'),

  image:function () {
    return (this.get('imgURL') || 'http://i.huffpost.com/gen/1688700/thumbs/o-HAPPY-DOG-DAY-OF-HAPPINESS-facebook.jpg');
  }.property('imgURL'),

  imgURL    : DS.attr('string')
});
