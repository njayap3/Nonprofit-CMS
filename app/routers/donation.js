module.exports = function(config, mongoose) {

	/*var router = require("./mongoConnection.js")(config);*/
	var 
			express = require("express"),
			router = express.Router();
	
	var donationSchema = mongoose.Schema({
		amount: Number,
		cardType: String,
		creditCardNum: Number,
		month: Number,
		year: Number,
		cvv: Number,
		name: String,
		address: String,
		comments: String
		//date: String
	});

	var DonationModel = mongoose.model("donations", donationSchema);

	router.route("/donations")
		.get(function (req, res) {
			DonationModel.find({},
				function(err, donation) {
					if(err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(donation);
				});
		});

	// Create
	router.route("/donation")
		.post(function (req, res) {
			var t = new DonationModel(req.body.donation);
			t.save(function(err, donation) {
				if(err) {
					console.log(err);
					res.status(500).json(err);
					return;
				}

				res.json(donation);
			});

		});
	//GET, delete, put 
	router.route("/donation/:donationId")
		.get(function (req, res) {

		})
		.put(function (req, res) {

		})
		.delete(function (req, res) {

		});
	return router;



};