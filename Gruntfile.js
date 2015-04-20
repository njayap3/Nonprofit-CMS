module.exports = function (grunt) {

	grunt.initConfig({
		webServer: {
			rootFolder: "www",
			port: 8080
		}
	});

	grunt.registerTask("default", "start a web server", function() {

		var 
			webServer = require("./web-server");
			webServerConfig = grunt.config("webServer");

		this.async();

		webServer(webServerConfig, function() {
			grunt
				.log
				.writeln("web server listening on port: " + webServerConfig.port);
		});

	});
};