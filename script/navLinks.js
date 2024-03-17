"use strict";

import { isMobile } from "./device.js";

export const createLinks = (links) => {
  const menu = document.getElementById("header__nav__menu");

  links.forEach((link) => {
    const navLink = document.createElement("a");
    navLink.id = `header__nav__menu__link-${link.toLowerCase()}`;
    navLink.classList = "menu__links menu__links__bg buttons-effect popup";
    link === "HOME" ? (navLink.href = `/index.html`) : (navLink.href = `/${link.toLowerCase()}.html`);
    isMobile() ? navLink.setAttribute("") : navLink.setAttribute("data-aos", "flip-down");
    navLink.textContent = `${link}`;

    menu.append(navLink);
  });
};
