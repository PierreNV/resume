import { languageSwitcher } from "./languageSwitcher.js";

export const navFooterElements = {
  linkedin: {
    href: "https://www.linkedin.com/in/pierre-neveu-424a4b60/",
    target: "_blank",
    rel: "noopener noreferrer",
    iconClassList: "fa-brands fa-linkedin fa-2x",
    ariaLabel: "My linkedin",
  },
  github: {
    href: "https://github.com/PierreNV/",
    target: "_blank",
    rel: "noopener noreferrer",
    iconClassList: "fa-brands fa-github fa-2x",
    ariaLabel: "My github",
  },
  resume: {
    id: "footer__nav__pdf",
    href: "files/Pierre-Neveu_resume.pdf",
    download: true,
    iconClassList: "fa-solid fa-download fa-2x",
    ariaLabel: "Download my resume",
  },
  lang: {
    element: "button",
    classList: "footer__nav__button",
    type: "button",
    onclick: languageSwitcher,
    iconClassList: "fa-solid fa-language fa-2x",
    ariaLabel: "Switch language",
    flag: {
      id: "footer__nav__flag",
      class: "footer__nav__flag",
      src: "https://cdn-icons-png.flaticon.com/512/197/197564.png",
      alt: "flag",
    },
  },
};
