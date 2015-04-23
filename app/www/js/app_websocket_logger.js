function MyWebSocket(webSocketServerURL) {

	this.connected = new Promise(function(resolve, reject) {
		var ws = new WebSocket(webSocketServerURL);
		ws.addEventListener("open", function() {
			resolve(ws);
		});
	});
}

MyWebSocket.prototype.sendObject = function(obj) {
	this.connected.then(function(ws) {
		ws.send(JSON.stringify(obj));
	});
};

MyWebSocket.prototype.onReceiveObject = function(callbackFn) {
	this.connected.then(function(ws) {
		ws.addEventListener("message", function(message) {
			callbackFn(JSON.parse(message.data));
		});
	});
};

function WhereAmI() {

	this.p = new Promise(function(resolve, reject) {

		navigator.geolocation.getCurrentPosition(function(position) {
			resolve(position);
		}, function(err) {
			switch (err.code) {
				case err.PERMISSION_DENIED:
					console.log("permission denied");
					break;
				case err.POSITION_UNAVAILABLE:
					console.log("position unavailable");
					break;
				case err.TIMEOUT:
					console.log("timeout");
					break;
				default:
					console.log("who knows...");
					break;
			}
			reject(err);
		});

	});

}

WhereAmI.prototype.myCurrentPosition = function() {

	return this.p;

};

WhereAmI.prototype.errorMessage = function(msg) {
	console.log(msg);
};

Object.defineProperty(WhereAmI.prototype, "currentPosition", {
	configurable: false,
	enumerable: true,
	get: function() {
		return this.p;
	}
});

window.addEventListener("DOMContentLoaded", function() {

	var w = new WhereAmI();
	w.currentPosition.then(function(position) {
		var mws = new MyWebSocket("ws://localhost:8080");
		mws.sendObject({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
		console.log(position.coords.longitude);
		console.log(position.coords.latitude);
	}, function(err) {
		console.log("did not work out..." + err);
	});

	w.errorMessage("Error message: testing for error.");

});