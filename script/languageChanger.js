"use strict";

import { getHeaderNavElements, getFooterNavElements, getIndexElements, getResumeElements, getContactElements, elementsContent } from "./languageElements.js";

export const changeLanguage = (language) => {
  getHeaderNavElements().forEach((el) => {
    el.value.textContent = elementsContent.headerNav[language][el.name];
  });

  getFooterNavElements().forEach((el) => {
    if (el.value.src) el.value.src = elementsContent.footerNav[language][el.name];
    if (el.value.href) el.value.href = elementsContent.footerNav[language][el.name];
  });

  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    getIndexElements().forEach((el) => {
      el.value.textContent = elementsContent.index[language][el.name];
    });
  }

  if (window.location.pathname.includes("resume.html")) {
    getResumeElements().forEach((el) => {
      el.value.textContent = elementsContent.resume[language][el.name];
    });
  }

  if (window.location.pathname.includes("contact.html")) {
    getContactElements().forEach((el) => {
      if (el.value.placeholder) el.value.placeholder = elementsContent.contact[language][el.name];
      if (el.value.textContent) el.value.textContent = elementsContent.contact[language][el.name];
    });
  }
};
