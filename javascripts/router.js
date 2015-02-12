App.Router.map(function() {
  this.route("authors");
});

App.AuthorsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('author');
  }
});
