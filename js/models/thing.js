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

    if (dimg[0]) {
      var dimgURL = dimg[0].url
    }

    return (this.get('imgURL') || dimgURL || 'unsplashed/no-category.jpeg');
  }.property('imgURL', 'category'),

  imgURL    : DS.attr('string')
});
