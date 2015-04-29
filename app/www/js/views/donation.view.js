var DonationsFormView = Backbone.View.extend({
	events: {
		"click #donation-form-submit": "submitForm"
	},

	bindings: function() {
		return {
			"#amount": {
				observe: "donation-amount",
				setOptions: {
					validate: false
				},
				initialize: function($el, model, options) {
					console.log("called stickit contact name");
				},
				destroy: function($el, model, options) {
					console.log("called unstickit contact name");
				},
				onGet: function(value, options) {
					// used for formatting
					console.log("on get");
					return value;
				},
				onSet: function(value, options) {
					console.log("on set");
					return value;
				},
				getVal: function($el, event, options) {
					return $el.val();
				},
				update: function($el, val, model, options) {
					// used for changing how the element is set
					$el.val(val);
				},
				updateView: function(val, event, options) {
					return true;
				},
				updateModel: function(val, event, options) {
					return true;
				}
			}
		};
	},

	render: function() {
		console.dir(this.model);
		this.$el.html(templates.donationform(this.model));
		this.stickit();
	},

	initialize: function(options) {
		this.options = options;
	},

	submitForm: function(e) {
		e.preventDefault();
		var t = new Donation({});
			t.set("amount", $("#amount").val());
			t.set("creditCardNum", $("#creditCardNum").val());
			t.set("cardType", $("#cardType").val());
			t.set("month", $("#month").val());
			t.set("year", $("#year").val());
			t.set("cvv", $("#cvv").val());
			t.set("name", $("#name").val());
			t.set("address", $("#address").val());
			t.set("comments", $("#comments").val());
			t.save(null, {
				success: function() {
					console.dir(t.attributes);
				}
			});

	}

});