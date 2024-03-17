"use strict";

import { createMenu } from "./navMenu.js";
import { createDropDownButton } from "./navButton.js";
import { createLinks } from "./navLinks.js";
import { createFooter } from "./navFooter.js";

/*ADD NAVBAR LINK HERE + CREATE RELATED HTML FILE + UPDATE "languageElements/elementsContent" FILE ACCORDINGLY for custom translation to SV*/
const pages = ["HOME", "PROJECTS", "RESUME", "GAME", "CONTACT"];

const createNavigation = (links) => {
  createDropDownButton();
  createMenu();
  createLinks(links);
  createFooter();
};

createNavigation(pages);
