"use strict";

import { navFooterElements } from "./navFooterElements.js";

export const createFooter = () => {
  const navFooter = document.getElementById("footer__nav");

  navFooterElements.forEach((el) => {
    const flag = document.createElement("img");
    const icon = document.createElement("i");
    const link = el.tag ? document.createElement(`${el.tag}`) : document.createElement(`a`);

    if (el.flag) {
      flag.id = el.flag.id;
      flag.classList = el.flag.class;
      flag.src = el.flag.src;
      flag.alt = el.flag.alt;
      icon.append(flag);
    }

    if (el.iconClassList) {
      icon.classList = `${el.iconClassList}`;
      link.append(icon);
    }

    el.classList ? (link.classList = `${el.classList}`) : (link.classList = "footer__nav__link");
    if (el.id) link.id = `${el.id}`;
    if (el.href) link.href = `${el.href}`;
    if (el.ariaLabel) link.ariaLabel = `${el.ariaLabel}`;
    if (el.target) link.target = `${el.target}`;
    if (el.rel) link.rel = `${el.rel}`;
    if (el.download) link.download = `${el.download}`;
    if (el.type) link.type = `${el.type}`;
    if (el.onclick) link.addEventListener("click", el.onclick);

    navFooter.append(link);
  });
};
