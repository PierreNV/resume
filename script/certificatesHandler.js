"use strict";

function certificatesNotification() {
  const request = document.getElementById("cert-request");
  if (document.getElementById("cert-checkbox").checked) {
    request.value = "Certificates are requested...";
  } else {
    request.value = "";
  }
}
