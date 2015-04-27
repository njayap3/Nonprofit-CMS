var AboutView = Backbone.View.extend({
	render: function() {
		this.$el.html(templates.about());
	},

	initialize: function(options) {
		this.options = options;
	}
});