App.ReviewThingsRoute = App.ApplicationRoute.extend({
  model: function () {
    return this.store.find('thing').then(function (data) {
      var ran = Math.floor( Math.random() * data.get('length') - 2 ) + 1
      if (ran > (data.get('length') - 2)) { ran = data.get('length') - 2; }
      if (ran < 0) { ran = 0; }
      console.log(ran, ran+2);
      return data.slice(ran, ran + 2);

    });
  },

  actions: {
    shuffle: function () {
      this.refresh();
    }
  }

});
