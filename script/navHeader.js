import { createDropDownButton } from "./navButton.js";
import { createLinks } from "./navLinks.js";

const Pages = ["Home", "Resume", "Contact"];

const createMenu = () => {
  const header = document.querySelector(".header_nav");

  const menuNav = document.createElement("nav");
  menuNav.classList = "menu";

  const menuDiv = document.createElement("div");
  menuDiv.classList = "toggle-target display-none";

  menuDiv.append(menuNav);
  header.append(menuDiv);
};

createMenu();
createDropDownButton();
createLinks(Pages);
