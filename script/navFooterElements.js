"use strict";
import { languageSwitcher } from "./languageSwitcher.js";

const getNextLanguage = () => {
  return window.location.hash ? "Switch language to english" : "Växla språk till svenska";
};

export const navFooterElements = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/pierre-neveu-424a4b60/",
    target: "_blank",
    rel: "noopener noreferrer",
    iconClassList: "fa-brands fa-linkedin fa-2x",
    ariaLabel: "My linkedin",
  },
  { name: "github", href: "https://github.com/PierreNV/", target: "_blank", rel: "noopener noreferrer", iconClassList: "fa-brands fa-github fa-2x", ariaLabel: "My github" },
  { name: "resume", id: "footer__nav__pdf", href: "files/Report-en.pdf", download: true, iconClassList: "fa-solid fa-download fa-2x", ariaLabel: "Download some generic file" },
  {
    name: "language switcher",
    tag: "button",
    classList: "footer__nav__button",
    type: "button",
    onclick: languageSwitcher,
    iconClassList: "fa-solid fa-language fa-2x",
    ariaLabel: `${getNextLanguage()}`,
    flag: {
      id: "footer__nav__flag",
      classList: "footer__nav__flag",
      src: "https://cdn-icons-png.flaticon.com/512/197/197564.png",
      alt: "flag",
    },
  },
];
