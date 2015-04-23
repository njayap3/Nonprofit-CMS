module.exports = function(webServerConfig, webServerCallback) {
	var
		http = require("http"),
		express = require("express"),
		app = express();

    	webSockets = require("./web-sockets.js");


		app.use(express.static(webServerConfig.rootFolder));

		webSockets(http.createServer(app)).listen(webServerConfig.port, webServerCallback);
};