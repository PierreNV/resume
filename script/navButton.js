"use strict";

import { navToggle } from "./navToggler.js";

export const createDropDownButton = () => {
  const headerNav = document.querySelector("#header__nav");
  const dropDownButtonBurger = document.createElement("i");
  const dropDownButton = document.createElement("button");

  dropDownButtonBurger.id = "header__nav__dropdown-button__burger";
  dropDownButtonBurger.classList = "fa-solid fa-bars";
  dropDownButton.id = "header__nav__dropdown-button";
  dropDownButton.type = "button";
  dropDownButton.ariaLabel = "dropdown button";
  dropDownButton.classList = "container-bg buttons-effect";
  dropDownButton.addEventListener("click", navToggle);

  dropDownButton.append(dropDownButtonBurger);
  headerNav.prepend(dropDownButton);
};

// createDropDownButton();
