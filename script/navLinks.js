"use strict";

export const createLinks = (links) => {
  const menu = document.getElementById("header__nav__menu");

  links.forEach((link) => {
    const navLink = document.createElement("a");

    navLink.id = `header__nav__menu__link-${link.toLowerCase()}`;
    navLink.classList = "menu__links menu__links__bg buttons-effect";
    link === "Home" ? (navLink.href = `/index.html`) : (navLink.href = `/${link.toLowerCase()}.html`);
    navLink.setAttribute("data-aos", "flip-down");
    navLink.setAttribute("data-aos-duration", "800");
    navLink.textContent = `${link}`;

    menu.append(navLink);
  });
};
