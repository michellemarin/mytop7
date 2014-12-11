App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Firebase = new Firebase('https://topseven.firebaseio.com/');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: App.Firebase
});

//
// App.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'mytop7-emberjs'
// });

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
  {id: '1',  categoryID: '1', rname: 'Thich Nhat Hanh',         url: 'http://plumvillage.org/'},
  {id: '2',  categoryID: '1', rname: 'Conscious Living',        url: 'http://consciouslivingtv.com/'},
  {id: '3',  categoryID: '1', rname: 'Spirituality-Health',     url: 'http://spiritualityhealth.com/'},
  {id: '4',  categoryID: '1', rname: 'How To Meditate',         url: 'http://www.how-to-meditate.org/'},
  {id: '5',  categoryID: '2', rname: 'Equinox-Health',          url: 'http://q.equinox.com/topics/health'},
  {id: '6',  categoryID: '2', rname: 'Greatist-Grow',           url: 'http://greatist.com/grow'},
  {id: '7',  categoryID: '2', rname: 'NPR-The Salt',            url: 'http://www.npr.org/blogs/thesalt/'},
  {id: '8',  categoryID: '2', rname: 'Bliss Tree',              url: 'http://www.blisstree.com/'},
  {id: '9',  categoryID: '3', rname: 'Aha-Parenting',           url: 'http://www.ahaparenting.com/_blog/parenting_blog'},
  {id: '10', categoryID: '3', rname: 'Family Dog Finder-Quiz',  url: 'http://dogtime.com/quiz/dog-breed-selector'},
  {id: '11', categoryID: '3', rname: 'NY Times Parenting',      url: 'http://parenting.blogs.nytimes.com/?_r=0'},
  {id: '12', categoryID: '3', rname: 'Parenting.com',           url: 'http://www.parenting.com/blogs'},
  {id: '13', categoryID: '4', rname: 'Mind Body Green',         url: 'http://www.mindbodygreen.com/'},
  {id: '14', categoryID: '4', rname: 'Precision Nutrition',     url: 'http://www.precisionnutrition.com/blog'},
  {id: '15', categoryID: '4', rname: 'Equinox-Fitness',         url: 'http://q.equinox.com/topics/asktheexperts'},
  {id: '16', categoryID: '4', rname: 'Mentality WOD',           url: 'http://mentalitywod.com/'},
  {id: '17', categoryID: '5', rname: 'Forbes-Financing',        url: 'http://www.forbes.com/financing/'},
  {id: '18', categoryID: '5', rname: 'AARP-Financial',          url: 'http://www.aarp.org/money/investing/financial-freedom-tour/'},
  {id: '19', categoryID: '5', rname: 'Kate Northrup Blog',      url: 'http://www.katenorthrup.com/'},
  {id: '20', categoryID: '5', rname: 'Minimalist Financial',    url: 'http://www.becomingminimalist.com/financial-freedom/'},
  {id: '21', categoryID: '6', rname: 'Volunteer Match',         url: 'http://www.volunteermatch.org/'},
  {id: '22', categoryID: '6', rname: 'Conservation.org',        url: 'http://www.conservation.org/Pages/default.aspx'},
  {id: '23', categoryID: '6', rname: 'Break the Bag Habit',     url: 'http://www.breakthebaghabit.org.uk/'},
  {id: '24', categoryID: '6', rname: 'Ready.gov-Get Involved',  url: 'http://www.ready.gov/get-involved'},
  {id: '25', categoryID: '7', rname: 'I Wanna Go There',        url: 'http://iwannagothere.com/'},
  {id: '26', categoryID: '7', rname: 'World Wild Life',         url: 'http://www.worldwildlife.org/travel'},
  {id: '27', categoryID: '7', rname: 'Travel and Leisure',      url: 'http://www.travelandleisure.com/'},
  {id: '28', categoryID: '7', rname: 'Nature.org-Travel',       url: 'http://www.nature.org/greenliving/greenshopping/travel/'},
  {id: '29', categoryID: '8', rname: 'Lindsey Pollack-Blog',    url: 'http://www.lindseypollak.com/blog/'},
  {id: '30', categoryID: '8', rname: 'Simply Hired',            url: 'http://www.simplyhired.com/'},
  {id: '31', categoryID: '8', rname: 'Career Builder',          url: 'http://www.careerbuilder.com/'},
  {id: '32', categoryID: '8', rname: 'Penelope Trunk-Blog',      url: 'http://penelopetrunk.com/'}
]

App.DEFAULTIMG = [
  {id: '1', categoryID: '1', url: 'unsplashed/lotus.jpg'},
  {id: '2', categoryID: '2', url: 'unsplashed/health2.jpg'},
  {id: '3', categoryID: '3', url: 'unsplashed/family.jpeg'},
  {id: '4', categoryID: '4', url: 'unsplashed/fitness.jpg'},
  {id: '5', categoryID: '5', url: 'unsplashed/finance.jpg'},
  {id: '6', categoryID: '6', url: 'unsplashed/community1.jpg'},
  {id: '7', categoryID: '7', url: 'unsplashed/travel2.jpeg'},
  {id: '8', categoryID: '8', url: 'unsplashed/career.jpeg'}
]

  App.ThingFormComponent = Ember.Component.extend({
   title      : DS.attr('string'),
   category   : DS.attr('number'),

   image:function () {
     return (this.get('imgURL') || 'unsplashed/no-category.jpeg');
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
