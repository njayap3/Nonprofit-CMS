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

		var curView = new donationSideNav({
			router: this
		});
		curView.render();
		$("#donations").append(curView.$el);

		var subView = new DonationsView({
			collection: new Donations(), 
			el: $("#donations-list"),
			router: this
		});

		subView.render();
		//$("#donations-list").append(subView.$el);
		this.currentView = curView;
		
	},

	showDonationForm: function() {
		console.log("Calling showDonationForm route");
		if(this.currentView) {
			this.currentView.undelegateEvents();
			this.currentView.remove();
		}

		var curView = new donationSideNav({
			router: this
		});

		console.dir(curView);
		curView.render();
		$("#donations").append(curView.$el);

		/* For now this is a hack.
		TODO: Load the left view only once? and load the right view on route? */
		$(".donationsForm").tab("show");

		var subView = new DonationsFormView({
			model: new Donation(),
			el: $("#donations-form"),
			router: this
		});
		subView.render();
		
		this.currentView = curView;
	},

	/*showTransaction: function(transactionId) {

	},*/

	initialize: function(options) {
		this.options = options;
	}

});
