import { createMenu } from "./navMenu.js";
import { createDropDownButton } from "./navButton.js";
import { createLinks } from "./navLinks.js";
import { createFooter } from "./navFooter.js";

const Pages = ["Home", "Resume", "Contact"];

createMenu();
createDropDownButton();
createLinks(Pages);
createFooter();
