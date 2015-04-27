var DonationsView = Backbone.View.extend({

	render: function() {
		/*console.dir(this.$el);*/
		//this.$el.html(templates["donations"]({donations:this.collection}));
		var self = this;
		this.collection.fetch({
			success: function() {
				self.$el.html(templates.donations({donations:self.collection.toJSON()}));
			}
		});
	},

	initialize: function(options) {
		this.options = options;
	}

});