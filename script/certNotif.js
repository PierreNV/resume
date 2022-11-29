"use strict";

document.getElementById("certif-checkbox").onclick = function () {
  const userMessage = document.getElementById("message");
  const certValue = document.getElementById("cert-value");
  function certYes() {
    certValue.value = "yes";
    userMessage.value = "*Request Certificates.*" + "\n" + userMessage.value;
  }
  function certNo() {
    certValue.value = "no";
    userMessage.value = userMessage.value.replace(
      /[*]Request Certificates.[*]/gi,
      ""
    );
  }

  if (document.getElementById("certif-checkbox").checked) certYes();
  else certNo();
};
