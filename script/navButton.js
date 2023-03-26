import { navToggle } from "./navToggler.js";

export const createDropDownButton = () => {
  const headerNav = document.querySelector(".header_nav");
  const dropDownButtonBurger = document.createElement("i");
  const dropDownButton = document.createElement("button");

  dropDownButtonBurger.classList = "fa-solid fa-bars dropdown-button_burger";
  dropDownButton.type = "button";
  dropDownButton.id = "dropdown-button";
  dropDownButton.ariaLabel = "dropdown button";
  dropDownButton.classList = "container-bg buttons-effect";
  dropDownButton.addEventListener("click", navToggle);

  dropDownButton.append(dropDownButtonBurger);
  headerNav.prepend(dropDownButton);
};

// createDropDownButton();
