module.exports = function(config) {
	var
		express = require("express"),
		bodyParser = require("body-parser"),
		Promise = require("bluebird"),
		multer = require("multer"),
		fs = require('fs'),
		mongoose = require("mongoose"),
		session = require('express-session'),
		passport = require("passport"),
		crypto = require("crypto"),
		csrf = require("csrf")(),
		app = express();

		passport.serializeUser(function(user, done) {
		  	done(null, user);
		});

		passport.deserializeUser(function(user, done) {
	  		done(null, user);
		});

		app.use(session({
			resave: false,
			saveUninitialized: false,
			secret : "asecret"
		}));

		app.use(passport.initialize());
		app.use(passport.session());

		app.set("json replacer", function(key, value) {
			if (key === "__v") {
				return undefined;
			}
			return value;
		});

		app.use(express.static(config.httpServer.wwwRoot));

		mongoose.connect("mongodb://" +
    			config.mongoServer.host + ":" + config.mongoServer.port + "/" + config.mongoServer.dbName);

		app.use("/js", express.static(config.httpServer.jsRoot, {
			setHeaders: function(res, filePath) {
				if (/.gz.js$/.test(filePath)) {
					res.setHeader("Content-Encoding", "gzip");
				}
			}
		}));

		// no longer needed because uglify is combining the lib files with the app files
		app.use("/libs", express.static(config.httpServer.libsRoot));

		app.use("/css", express.static(config.httpServer.cssRoot, {
			setHeaders: function(res, filePath) {
				if (/.gz.css$/.test(filePath)) {
					res.setHeader("Content-Encoding", "gzip");
				}
			}
		}));


		app.use("/api", bodyParser.json());

		app.use("/api", multer({
			dest: "./app/uploads",
			rename: function(fieldName, fileName) {
				return fileName;
			}
		}));

		app.use("/api", require("./routers/contact.js")(config, mongoose));
		app.use("/api", require("./routers/donation.js")(config, mongoose));
		app.use("/api", require("./routers/gallery.js")(config, mongoose));

		var router = express.Router();
		router.route("/api/accounts/authenticate").post(function(req, res, next) {

			var loginSchema = mongoose.Schema({
				username: String,
				password: String
			});

			var LoginModel = mongoose.model("accounts", loginSchema);

			var passwordSalt = "salt is good for you";
			function sha1(value) {
				return crypto.createHash("sha1").update(value.toString()).digest("hex");
			}

			var pwd = sha1(req.body.password + passwordSalt);
			console.log(sha1(req.body.password + passwordSalt));


			var logindata = {
				username: req.body.username,
				password: pwd
			};
			
			LoginModel.find(logindata, function(err, login){

			      if(err){
			        console.log(err);
			        res.status(500).json(err);
			        return;
			      }

			      csrf.secret().then(function(secret) {
					req.session.csrfSecret = secret;
					res.set("X-CSRF-Token", csrf.create(req.session.csrfSecret));
					res.json(user);
				});
			      console.log(login);
			      res.json(login);
		    });
		});
		
		app.use(router);

		app.use("/api", function(req, res, next) {
			//console.log("blahhhhhhhhhhhh");
			console.dir(req);
			if (!req.body.username) {
				console.log("not a valid user");
				res.status(401).json({
					msg: 'not logged in'
				});
				return;
			}

			if (!csrf.verify(req.session.csrfSecret, req.get("X-CSRF-Token"))) {
				console.log("not a valid token");
				res.status(401).json({
					msg: 'not logged in'
				});
				return;
			}

			csrf.secret().then(function(secret) {
				req.session.csrfSecret = secret;
				res.set("X-CSRF-Token", csrf.create(req.session.csrfSecret));
				next();
			});
			
		});


		return app;
};