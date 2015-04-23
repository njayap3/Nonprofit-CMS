module.exports = function (grunt) {

	var path = require("path");

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
		},
		handlebars: {
			compile: {
				options: {
					namespace: "templates",
					processName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					},
					processPartialName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					}
				},
				files: {
					"app/www/js/templates.js": "app/templates-min/**/*.min.hbs"
				}
			}
		},
		htmlmin: {
			templates: {
			      options: {
			        removeComments: true,
			        collapseWhitespace: true
			      },
		        expand: true,
		        cwd: 'app/templates',
		        src: '*.hbs',
		        dest: 'app/templates-min/',
		        ext: ".min.hbs"
			}
		},
		watch: {
			templates: {
				files: ["app/templates/**/*.hbs"],
				tasks: ["htmlmin", "handlebars"],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
  	grunt.loadNpmTasks("grunt-contrib-handlebars");
  	grunt.loadNpmTasks("grunt-contrib-htmlmin");

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

	grunt.registerTask("default", ["htmlmin", "handlebars", "webServer", "watch"]);
};