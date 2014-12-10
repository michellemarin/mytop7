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
  {id: '6', name: 'Community'},
  {id: '7', name: 'Travel'},
  {id: '8', name: 'Career'},
  {id: '9', name: 'Other'}
];


App.RESOURCES = [
  {id: '1', categoryID: '1', url: 'http://plumvillage.org/'},
  {id: '2', categoryID: '1', url: 'http://consciouslivingtv.com/'},
  {id: '3', categoryID: '1', url: 'http://spiritualityhealth.com/'},
  {id: '4', categoryID: '1', url: 'http://www.how-to-meditate.org/'},
  {id: '5', categoryID: '2', url: 'http://q.equinox.com/topics/health'},
  {id: '6', categoryID: '2', url: 'http://greatist.com/grow'},
  {id: '7', categoryID: '2', url: 'http://www.npr.org/blogs/thesalt/'},
  {id: '8', categoryID: '2', url: 'http://www.blisstree.com/'},
  {id: '9', categoryID: '3', url: 'http://www.ahaparenting.com/_blog/parenting_blog'},
  {id: '10', categoryID: '3', url: 'http://noahsdad.com/'},
  {id: '11', categoryID: '3', url: 'http://parenting.blogs.nytimes.com/?_r=0'},
  {id: '12', categoryID: '3', url: 'http://www.parenting.com/blogs'},
  {id: '13', categoryID: '4', url: 'http://www.mindbodygreen.com/'},
  {id: '14', categoryID: '4', url: 'http://www.precisionnutrition.com/blog'},
  {id: '15', categoryID: '4', url: 'http://q.equinox.com/topics/asktheexperts'},
  {id: '16', categoryID: '4', url: 'http://mentalitywod.com/'},
  {id: '17', categoryID: '5', url: 'http://www.forbes.com/financing/'},
  {id: '18', categoryID: '5', url: 'http://www.aarp.org/money/investing/financial-freedom-tour/'},
  {id: '19', categoryID: '5', url: 'http://www.katenorthrup.com/'},
  {id: '20', categoryID: '5', url: 'http://www.becomingminimalist.com/financial-freedom/'},
  {id: '21', categoryID: '6', url: 'http://www.volunteermatch.org/'},
  {id: '22', categoryID: '6', url: 'http://www.conservation.org/Pages/default.aspx'},
  {id: '23', categoryID: '6', url: 'http://www.breakthebaghabit.org.uk/'},
  {id: '24', categoryID: '6', url: 'http://www.ready.gov/get-involved'},
  {id: '25', categoryID: '7', url: 'http://iwannagothere.com/'},
  {id: '26', categoryID: '7', url: 'http://www.worldwildlife.org/travel'},
  {id: '27', categoryID: '7', url: 'http://www.travelandleisure.com/'},
  {id: '28', categoryID: '7', url: 'http://www.nature.org/greenliving/greenshopping/travel/'},
  {id: '29', categoryID: '8', url: 'http://www.lindseypollak.com/blog/'},
  {id: '30', categoryID: '8', url: 'http://www.simplyhired.com/'},
  {id: '31', categoryID: '8', url: 'http://www.careerbuilder.com/'},
  {id: '32', categoryID: '8', url: 'http://penelopetrunk.com/'}

]

App.ThingFormComponent = Ember.Component.extend({
  title      : DS.attr('string'),
  category   : DS.attr('number'),

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
