var AppRouter = Backbone.Router.extend({

	routes: {
		"": "showHome",
		"donations": "showDonations",
		"donations/:donationId": "getDonation",
		"donationform": "showDonationForm",
		"contacts": "showContacts",
		"contacts/:contactId": "getContact",
		"contactForm": "showContactForm",
		"gallerys": "showGallerys",
		"gallerys/:galleryId": "getGallery",
		"galleryForm": "showGalleryForm"
	},

	showHome: function() {

		// only do this if a new is being created
		if (this.currentView) {
			this.currentView.undelegateEvents();
			this.currentView.remove();
		}

		// create a new view
		this.currentView = new AboutView({
			// passing the element passed into the router
			//el: this.options.el,
			//el: $("#about"),
			// give view access to the router to navigate in response to events
			router: this
		});

		// render the new view
		this.currentView.render();
		$("#about").append(this.currentView.$el);
	},

	showDonations: function() {
		console.log("Calling showDonations route");
		if (this.currentView) {
			this.currentView.undelegateEvents();
			this.currentView.remove();
		}
		this.currentView = new DonationsView({
			collection: new Donations(), 
			//el: $("#donations-list"),
			router: this
		});

		this.currentView.render();
		$("#donations-list").append(this.currentView.$el);
		
	},

	showDonationForm: function() {
		console.log("Calling showDonationForm route");
		if(this.currentView) {
			this.currentView.undelegateEvents();
			this.currentView.remove();
		}

		this.currentView = new DonationsFormView({
			model: new Donation(),
			//el: $("#donations-form"),
			router: this
		});

		this.currentView.render();
		$("#donations-form").append(this.currentView.$el);
	},

	/*showTransaction: function(transactionId) {

	},*/

	initialize: function(options) {
		this.options = options;
	}

});
