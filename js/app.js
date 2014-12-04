App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Firebase = new Firebase('https://topseven.firebaseio.com/');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: App.Firebase
});

App.CATEGORIES = [
  {id: '1', name: 'Spirituality'},
  {id: '2', name: 'Health'},
  {id: '3', name: 'Family'},
  {id: '4', name: 'Fitness'},
  {id: '5', name: 'Finance'},
  {id: '6', name: 'Community Service'},
  {id: '7', name: 'Travel'},
  {id: '8', name: 'Other'}
];


App.ThingFormComponent = Ember.Component.extend({
  title      : DS.attr('string'),
  description: DS.attr('string'),
  category   : DS.attr('number'),

  markedDescription: function () {
    return marked((this.get('thing description')) || '');
  }.property('thing.description'),

  image:function () {
    return (this.get('imgURL') || 'http://i.huffpost.com/gen/1688700/thumbs/o-HAPPY-DOG-DAY-OF-HAPPINESS-facebook.jpg');
  }.property('imgURL'),

  imgURL    : DS.attr('string')
});


/*$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
    if (startchange.length) {
      $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
          $('.navbar-default').css('background-color', '#435A6B');
        } else {
          $('.navbar-default').css('background-color', 'transparent');
        }
      });
    }
});*/
