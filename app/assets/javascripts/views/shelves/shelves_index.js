GoodTomes.Views.ShelvesIndex = Backbone.CompositeView.extend ({
  template: JST["shelves/shelves_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addTomeView);
    this.listenTo(this.collection, "remove", this.removeTomeView);
    this.collection.each(this.addTomeView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ shelf: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addTomeView: function (tome) {
    var subview = new GoodTomes.Views.TomesIndexItem({ model: tome });
    this.addSubview('.tome-items', subview);
  },

  removeTomeView: function (tome) {
    this.removeModelSubview('.tome-items .row', tome);
  }
});
