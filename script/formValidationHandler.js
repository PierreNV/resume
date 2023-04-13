"use strict";

function validateInputs(inputs) {
  let validity = [];
  inputs.forEach((input) => {
    validity.push(input.validity.valid);
  });
  return validity.includes(false) ? false : true;
}

function validateForm() {
  const inputs = document.querySelectorAll(".contact__form__input");
  const checkbox = document.getElementById("agree-checkbox");
  const button = document.getElementById("submit-button");

  if (validateInputs(inputs) && checkbox.checked) {
    checkbox.value = "Agreed";
    button.disabled = false;
    button.classList.add("buttons-effect");
  } else {
    checkbox.value = null;
    button.disabled = true;
    button.classList.remove("buttons-effect");
  }
}
