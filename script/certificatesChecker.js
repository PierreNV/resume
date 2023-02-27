"use strict";

function certificatesCheck() {
	const userMessage = document.getElementById("message");
	const certValue = document.getElementById("cert-value");
	function certYes() {
		certValue.value = "yes";
		userMessage.value = "(Certificates requested...)" + "\n" + userMessage.value;
	}
	function certNo() {
		certValue.value = "no";
		userMessage.value = userMessage.value.replace(
			/[(]Certificates requested...[)]/gi,
			""
		);
	}

	if (document.getElementById("cert-checkbox").checked) certYes();
	else certNo();
};
