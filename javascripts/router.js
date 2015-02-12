App.Router.map(function() {
  this.resource("authors", function() {
    this.route('author', {path: '/:author_id'});
  });

  this.resource('books', function() {
    this.resource('books.book', {path: '/:book_id'}, function() {
     this.route('review', {path: '/:review_id'});
    });
  });

});

App.AuthorsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('author');
  }
});

App.BooksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('book');
  }
});

App.BookReviewRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('review');
  }
});
