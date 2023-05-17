"use strict"

import { createMenu } from "./navMenu.js";
import { createDropDownButton } from "./navButton.js";
import { createLinks } from "./navLinks.js";
import { createFooter } from "./navFooter.js";

const pages = ["Home", "Resume", "Game", "Contact"];

const createNavigation = (links) => {
  createDropDownButton();
  createMenu();
  createLinks(links);
  createFooter();
};

createNavigation(pages);
