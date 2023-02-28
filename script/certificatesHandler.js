"use strict";

function certificatesNotification() {
  const checkbox = document.getElementById("cert-checkbox");
  const request = document.getElementById("cert-request");

  checkbox.checked
    ? (request.value = "Certificates are requested...")
    : (request.value = "");
}
