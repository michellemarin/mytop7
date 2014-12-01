App = Ember.Application.create({
  LOG_TRANSITIONS: true
}
);

App.Firebase = new Firebase('https://topseven.firebaseio.com/');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: App.Firebase
});

App.CATEGORIES = [
  {id: '1', name: 'Spirituality'},
  {id: '2', name: 'Health/Wellness'},
  {id: '3', name: 'Relationships (Family/Friends)'},
  {id: '4', name: 'Fitness'},
  {id: '5', name: 'Finance'},
  {id: '6', name: 'Community Service'},
  {id: '7', name: 'Travel'},
  {id: '8', name: 'Other'}
];

App.ThingFormComponent = Ember.Component.extend({
  markedDescription: function () {
    return marked((this.get('thing description')) || '');
  }.property('thing.description')
});


$("#myForm").validate( {
  rules: {
    title: {
      required: true
    },
    description: {
      required: true
    },
    category: {
      required: true
    },
    imgURL: {
      required: true,
      url: true
    },
    items: {
      required: true
    },
    steps: {
      required: true
    }
  }

});
