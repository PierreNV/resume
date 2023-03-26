import { languageSwitcher } from "./languageSwitcher.js";

export const navFooterElements = {
  linkedin: {
    element: "a",
    class: "footer__link",
    href: "https://www.linkedin.com/in/pierre-neveu-424a4b60/",
    ariaLabel: "My linkedin",
    target: "_blank",
    rel: "noopener noreferrer",
    iclass: "fa-brands fa-linkedin fa-2x",
  },
  github: {
    element: "a",
    class: "footer__link",
    href: "https://github.com/PierreNV/",
    ariaLabel: "My github",
    target: "_blank",
    rel: "noopener noreferrer",
    iclass: "fa-brands fa-github fa-2x",
  },
  resume: {
    element: "a",
    id: "resume-pdf",
    class: "footer__link",
    href: "files/Pierre-Neveu_resume.pdf",
    download: true,
    ariaLabel: "Download my resume",
    iclass: "fa-solid fa-download fa-2x",
  },
  lang: {
    element: "button",
    class: "footer__button",
    type: "button",
    onclick: languageSwitcher,
    iclass: "fa-solid fa-language fa-2x",
    flag: {
      id: "flag",
      class: "flag",
      src: "https://cdn-icons-png.flaticon.com/512/197/197564.png",
    },
  },
};
