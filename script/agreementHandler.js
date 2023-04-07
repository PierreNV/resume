"use strict";

function agree() {
  const checkbox = document.getElementById("agree-checkbox");
  const request = document.getElementById("agree-request");
  const button = document.getElementById("submit-button");

  if (checkbox.checked) {
    request.value = "Agreed";
    button.disabled = false;
    button.classList.add("buttons-effect");
  } else {
    request.value = null;
    button.disabled = true;
    button.classList.remove("buttons-effect");
  }
}
