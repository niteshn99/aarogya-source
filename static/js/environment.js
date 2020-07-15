let API_KEY;
let THYROCARE_ORDER_ROOT_URL;
let CONTACT_FORM_URL = "https://script.google.com/macros/s/AKfycbyxcZ4dD0CRK0KctqgoPsIXhy8LnDgL3vX52UhlAuYc_n8d_KQ/exec";

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