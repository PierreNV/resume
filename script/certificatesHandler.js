"use strict";

function certificatesNotification() {
  const request = document.getElementById("cert-request");
  document.getElementById("cert-checkbox").checked
    ? (request.value = "Certificates are requested...")
    : (request.value = "");
}
