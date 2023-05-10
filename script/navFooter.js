"use strict";

import { navFooterElements } from "./navFooterElements.js";

export const createFooter = () => {
  const navFooter = document.getElementById("footer__nav");

  Object.entries(navFooterElements).forEach((key) => {
    const flag = document.createElement("img");
    const icon = document.createElement("i");
    const link = key[1].element ? document.createElement(`${key[1].element}`) : document.createElement(`a`);

    if (key[1].flag) {
      flag.id = Object.entries(key[1].flag)[0][1];
      flag.classList = Object.entries(key[1].flag)[1][1];
      flag.src = Object.entries(key[1].flag)[2][1];
      flag.alt = Object.entries(key[1].flag)[3][1];
      icon.append(flag);
    }

    if (key[1].iconClassList) {
      icon.classList = `${key[1].iconClassList}`;
      link.append(icon);
    }

    key[1].classList ? (link.classList = `${key[1].classList}`) : (link.classList = "footer__nav__link");
    if (key[1].id) link.id = `${key[1].id}`;
    if (key[1].href) link.href = `${key[1].href}`;
    if (key[1].ariaLabel) link.ariaLabel = `${key[1].ariaLabel}`;
    if (key[1].target) link.target = `${key[1].target}`;
    if (key[1].rel) link.rel = `${key[1].rel}`;
    if (key[1].download) link.download = `${key[1].download}`;
    if (key[1].type) link.type = `${key[1].type}`;
    if (key[1].onclick) link.addEventListener("click", key[1].onclick);

    navFooter.append(link);
  });
};
