var DonationsFormView = Backbone.View.extend({
	/*options: {
		el: $("#donations-list")
	},*/

	render: function() {
		this.$el.html(templates.donationform(this.model));
	},

	initialize: function(options) {
		this.options = options;
	}

});