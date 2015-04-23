module.exports = function(config, mongoose) {
	
	var 
			express = require("express"),
			router = express.Router();

		/*mongoose.connect("mongodb://" + 
			config.mongoServer.host + ":" +
			config.mongoServer.port + "/" +
			config.mongoServer.dbName);*/

	var contactSchema = mongoose.Schema({
		fname: String,
		lname: String,
		email: String,
		phoneNo: Number,
		comments: String,
		reason: String,
		contactmethod: String
	});

	var ContactModel = mongoose.model("contacts", contactSchema);

	router.route("/contacts")
		.get(function (req, res) {
			ContactModel.find({},
				function(err, contact) {
					if(err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(contact);
				});
		});

	// Create
	router.route("/contact")
		.post(function (req, res) {
			var t = new ContactModel(req.body);
			t.save(function(err, contact) {
				if(err) {
					console.log(err);
					res.status(500).json(err);
					return;
				}

				res.json(contact);
			});

		});
	//GET, delete, put 
	router.route("/contact/:contactId")
		.get(function (req, res) {
			ContactModel.findById(req.params.contactId,
				function(err, contact) {
					if(err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(contact);
				}

			);

		})
		.put(function (req, res) {

		})
		.delete(function (req, res) {

		});

	return router;

};