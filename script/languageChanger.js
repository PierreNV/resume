"use strict";

import { getHeaderNavElements, getFooterNavElements, getIndexElements, getProjectsElements, getResumeElements, getContactElements, elementsContent } from "./languageElements.js";

export const changeLanguage = (language) => {
  getHeaderNavElements().forEach((el) => {
    el.value.textContent = elementsContent.headerNav[language][el.name];
  });

  getFooterNavElements().forEach((el) => {
    el.value.src &&= elementsContent.footerNav[language][el.name];
    el.value.href &&= elementsContent.footerNav[language][el.name];
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

  if (window.location.pathname.includes("projects.html")) {
    getProjectsElements().forEach((el) => {
      el.value.textContent = elementsContent.resume[language][el.name];
    });
  }

  if (window.location.pathname.includes("contact.html")) {
    getContactElements().forEach((el) => {
      el.value.placeholder &&= elementsContent.contact[language][el.name];
      el.value.textContent &&= elementsContent.contact[language][el.name];
    });
  }
};
