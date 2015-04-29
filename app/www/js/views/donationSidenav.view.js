var donationSideNav = Backbone.View.extend({

	events: {
		"click .donationsList": "navigateToList",
		"click .donationsForm": "navigateToForm"
	},

	render: function() {
		this.$el.html(templates.donationSidenav());
	},

	initialize: function(options) {
		this.options = options;
	},

	navigateToList: function(options) {
		this.options.router.navigate("/donations", {trigger: true});
	},

	navigateToForm: function(options) {
		this.options.router.navigate("/donationform", {trigger: true});
	}

});