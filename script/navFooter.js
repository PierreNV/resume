import { navFooterElements } from "./navFooterElements.js";

export const createFooter = () => {
  const navFooter = document.querySelector(".footer__nav");

  Object.entries(navFooterElements).forEach((key) => {
    const img = document.createElement("img");
    const icon = document.createElement("i");
    const link = document.createElement(`${key[1].element}`);

    if (key[1].flag) {
      img.id = Object.entries(key[1].flag)[0][1];
      img.classList = Object.entries(key[1].flag)[1][1];
      img.src = Object.entries(key[1].flag)[2][1];
    }
    if (key[1].iclass) icon.classList = `${key[1].iclass}`;
    if (key[1].id) link.id = `${key[1].id}`;
    if (key[1].class) link.classList = `${key[1].class}`;
    if (key[1].href) link.href = `${key[1].href}`;
    if (key[1].ariaLabel) link.ariaLabel = `${key[1].ariaLabel}`;
    if (key[1].target) link.target = `${key[1].target}`;
    if (key[1].rel) link.rel = `${key[1].rel}`;
    if (key[1].download) link.download = `${key[1].download}`;
    if (key[1].type) link.type = `${key[1].type}`;
    if (key[1].onclick) link.addEventListener("click", key[1].onclick);

    icon.append(img);
    link.append(icon);
    navFooter.append(link);
  });
};
