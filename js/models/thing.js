App.Thing = DS.Model.extend({
  title      : DS.attr('string'),
  category   : DS.attr('number'),
  rank       : DS.attr('number'),
  count      : DS.attr('number'),

  image:function () {

    var self = this;
    var dimg = App.DEFAULTIMG.filter( function (defaultimg) {
      return defaultimg.categoryID == self.get('category');
    });
    console.log(dimg[0]);

    if (dimg[0]) {
      var dimgURL = dimg[0].url
    }

    return (this.get('imgURL') || dimgURL || 'http://i.huffpost.com/gen/1688700/thumbs/o-HAPPY-DOG-DAY-OF-HAPPINESS-facebook.jpg');
  }.property('imgURL', 'category'),

  imgURL    : DS.attr('string')
});
