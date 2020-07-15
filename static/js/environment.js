let API_KEY;
let THYROCARE_ORDER_ROOT_URL;
document.addEventListener("DOMContentLoaded", function () {
	let origin   = window.location.origin;
	if (origin.indexOf("localhost") >= 0 ) {
		API_KEY = "sNhdlQjqvoD7zCbzf56sxppBJX3MmdWSAomi@RBhXRrVcGyko7hIzQ==";
		THYROCARE_ORDER_ROOT_URL = "https://www.thyrocare.com/API_BETA/ORDER.svc"
	} else {
		API_KEY = "CUEMjFxhgtnAbApUpAqJ9QSV7l)qXEH8f0unh8fpQNYcKLWvXyFzEw==";
		THYROCARE_ORDER_ROOT_URL = "https://www.thyrocare.com/APIS/ORDER.svc"
	}
});