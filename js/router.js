App.Router.map(function () {
  this.route('thing',             {path: '/things/:id'         });
  this.route('edit_thing',        {path: '/things/:id/edit'    });
  this.route('new_thing',         {path: '/things/new'         });
  this.route('review_things',     {path: '/review'             });
  this.route('category',          {path: '/categories'         });
  this.route('login',             {path: '/login'              });
});