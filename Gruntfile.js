module.exports = function (grunt) {

	grunt.initConfig({
		httpServer: {
			wwwRoot: "app/www",
			port: 8080,
			callback: function() {
				grunt.log.writeln("web server listening on port: " + this.port);
			}
		},
		mongoServer: {
			host: "localhost",
			port: 27017,
			dbName: "Bootcamp"
		},
		loggerConfig: {
			transports: {
				console: {
					level: "debug",
					colorize: true,
					timestamp: true
				},
				file: {
					level: "debug",
					fileName: "logs/app.log",
					timestamp: true
				}
			}
		}
	});

	grunt.registerTask("webServer", "start a web server", function() {

		var 
			httpServer = require("./app/http-server"),
			logger = require("./app/logger.js")(grunt.config("loggerConfig")),
			app = require("./app/app"),

			config = {
				webSockets: require("./app/web-sockets"),
				httpServer: grunt.config("httpServer"),
				mongoServer: grunt.config("mongoServer")
			};

			logger.info("testing...");
			this.async();
			config.app = app(config);
			httpServer(config, logger);
	});

	grunt.registerTask("default", ["webServer"]);
};