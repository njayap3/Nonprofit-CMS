"use strict";

window.addEventListener("DOMContentLoaded", function() {

	console.log("dom loaded");

	var eleId = document.getElementById("loginform");
	eleId.addEventListener("click", function (e) {

		e.preventDefault();
		console.log("event triggered");

		var uname = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		var data = {
			username: uname, 
			password: password
		};

		console.log(data);

		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			/*if (xhr.status === 200) {
				var o = JSON.parse(xhr.responseText);
				console.log(o);
			}*/
			if (xhr.readyState === 4) {

				window.csrfToken = xhr.getResponseHeader("X-CSRF-Token");
				console.dir(window.csrfToken);

			}
		};

		xhr.open("POST", "/api/accounts/authenticate");
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify(data));


	});
	
});
