"use strict";

import { elements, elementsContent } from "./languageElements.js";

export const changeLanguage = (language) => {
  elements.any.headerNavMenuLinkHome.textContent = elementsContent.any[language].headerNavMenuLinkHome;
  elements.any.headerNavMenuLinkResume.textContent = elementsContent.any[language].headerNavMenuLinkResume;
  elements.any.headerNavMenuLinkContact.textContent = elementsContent.any[language].headerNavMenuLinkContact;
  elements.any.footerNavFlag.src = elementsContent.any[language].footerNavFlag;
  elements.any.footerNavPDF.href = elementsContent.any[language].footerNavPDF;

  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    elements.index.h1.textContent = elementsContent.index[language].h1;
    elements.index.p1.textContent = elementsContent.index[language].p1;
    elements.index.p2.textContent = elementsContent.index[language].p2;
    elements.index.p3.textContent = elementsContent.index[language].p3;
    elements.index.p4.textContent = elementsContent.index[language].p4;
    elements.index.cardCSS.li1.textContent = elementsContent.index[language].cardCSS.li1;
    elements.index.cardCSS.li2.textContent = elementsContent.index[language].cardCSS.li2;
    elements.index.cardCSS.li3.textContent = elementsContent.index[language].cardCSS.li3;
    elements.index.cardHTML.li1.textContent = elementsContent.index[language].cardHTML.li1;
    elements.index.cardHTML.li2.textContent = elementsContent.index[language].cardHTML.li2;
    elements.index.cardHTML.li3.textContent = elementsContent.index[language].cardHTML.li3;
    elements.index.cardJS.li1.textContent = elementsContent.index[language].cardJS.li1;
    elements.index.cardJS.li2.textContent = elementsContent.index[language].cardJS.li2;
    elements.index.cardJS.li3.textContent = elementsContent.index[language].cardJS.li3;
    elements.index.cardReactJS.li1.textContent = elementsContent.index[language].cardReactJS.li1;
    elements.index.cardReactJS.li2.textContent = elementsContent.index[language].cardReactJS.li2;
    elements.index.cardReactJS.li3.textContent = elementsContent.index[language].cardReactJS.li3;
  }

  if (window.location.pathname.includes("resume.html")) {
    elements.resume.contact.home.textContent = elementsContent.resume[language].contact.home;
    elements.resume.contact.phone.textContent = elementsContent.resume[language].contact.phone;
    elements.resume.contact.email.textContent = elementsContent.resume[language].contact.email;
    elements.resume.contact.webpage.textContent = elementsContent.resume[language].contact.webpage;
    elements.resume.contact.webpageURL.textContent = elementsContent.resume[language].contact.webpageURL;
    elements.resume.skills.skills.textContent = elementsContent.resume[language].skills.skills;
    elements.resume.skills.ul1.skills__ul1.textContent = elementsContent.resume[language].skills.ul1.skills__ul1;
    elements.resume.skills.ul1.skills__ul1__li1.textContent = elementsContent.resume[language].skills.ul1.skills__ul1__li1;
    elements.resume.skills.ul1.skills__ul1__li2.textContent = elementsContent.resume[language].skills.ul1.skills__ul1__li2;
    elements.resume.skills.ul1.skills__ul1__li3.textContent = elementsContent.resume[language].skills.ul1.skills__ul1__li3;
    elements.resume.skills.ul2.skills__ul2.textContent = elementsContent.resume[language].skills.ul2.skills__ul2;
    elements.resume.skills.ul2.skills__ul2__li1.textContent = elementsContent.resume[language].skills.ul2.skills__ul2__li1;
    elements.resume.skills.ul2.skills__ul2__li2.textContent = elementsContent.resume[language].skills.ul2.skills__ul2__li2;
    elements.resume.skills.ul2.skills__ul2__li3.textContent = elementsContent.resume[language].skills.ul2.skills__ul2__li3;
    elements.resume.skills.ul3.skills__ul3.textContent = elementsContent.resume[language].skills.ul3.skills__ul3;
    elements.resume.skills.ul3.skills__ul3__li1.textContent = elementsContent.resume[language].skills.ul3.skills__ul3__li1;
    elements.resume.skills.ul3.skills__ul3__li2.textContent = elementsContent.resume[language].skills.ul3.skills__ul3__li2;
    elements.resume.skills.ul3.skills__ul3__li3.textContent = elementsContent.resume[language].skills.ul3.skills__ul3__li3;
    elements.resume.education.education.textContent = elementsContent.resume[language].education.education;
    elements.resume.education.education__ul1.textContent = elementsContent.resume[language].education.education__ul1;
    elements.resume.education.education__ul1__li1.textContent = elementsContent.resume[language].education.education__ul1__li1;
    elements.resume.education.education__ul2.textContent = elementsContent.resume[language].education.education__ul2;
    elements.resume.education.education__ul2__li2.textContent = elementsContent.resume[language].education.education__ul2__li2;
    elements.resume.education.education__ul2__li3.textContent = elementsContent.resume[language].education.education__ul2__li3;
    elements.resume.projects.projects.textContent = elementsContent.resume[language].projects.projects;
    elements.resume.exp.exp.textContent = elementsContent.resume[language].exp.exp;
    elements.resume.exp.exp__ul1.textContent = elementsContent.resume[language].exp.exp__ul1;
    elements.resume.exp.exp__ul1__period.textContent = elementsContent.resume[language].exp.exp__ul1__period;
    elements.resume.exp.exp__ul1__li1.textContent = elementsContent.resume[language].exp.exp__ul1__li1;
    elements.resume.exp.exp__ul1__li2.textContent = elementsContent.resume[language].exp.exp__ul1__li2;
    elements.resume.exp.exp__ul2.textContent = elementsContent.resume[language].exp.exp__ul2;
    elements.resume.exp.exp__ul2__period.textContent = elementsContent.resume[language].exp.exp__ul2__period;
    elements.resume.exp.exp__ul2__li1.textContent = elementsContent.resume[language].exp.exp__ul2__li1;
    elements.resume.exp.exp__ul2__li2.textContent = elementsContent.resume[language].exp.exp__ul2__li2;
    elements.resume.exp.exp__ul2__li3.textContent = elementsContent.resume[language].exp.exp__ul2__li3;
    elements.resume.exp.exp__ul2__li4.textContent = elementsContent.resume[language].exp.exp__ul2__li4;
    elements.resume.exp.exp__ul2__li5.textContent = elementsContent.resume[language].exp.exp__ul2__li5;
    elements.resume.exp.exp__ul2__li6.textContent = elementsContent.resume[language].exp.exp__ul2__li6;
    elements.resume.exp.exp__ul3.textContent = elementsContent.resume[language].exp.exp__ul3;
    elements.resume.exp.exp__ul3__period.textContent = elementsContent.resume[language].exp.exp__ul3__period;
    elements.resume.exp.exp__ul3__li1.textContent = elementsContent.resume[language].exp.exp__ul3__li1;
    elements.resume.exp.exp__ul3__li2.textContent = elementsContent.resume[language].exp.exp__ul3__li2;
    elements.resume.exp.exp__ul3__li3.textContent = elementsContent.resume[language].exp.exp__ul3__li3;
    elements.resume.exp.exp__ul3__li4.textContent = elementsContent.resume[language].exp.exp__ul3__li4;
    elements.resume.exp.exp__ul3__li5.textContent = elementsContent.resume[language].exp.exp__ul3__li5;
    elements.resume.exp.exp__ul4.textContent = elementsContent.resume[language].exp.exp__ul4;
    elements.resume.exp.exp__ul4__period.textContent = elementsContent.resume[language].exp.exp__ul4__period;
    elements.resume.exp.exp__ul4__li1.textContent = elementsContent.resume[language].exp.exp__ul4__li1;
    elements.resume.exp.exp__ul4__li2.textContent = elementsContent.resume[language].exp.exp__ul4__li2;
    elements.resume.exp.exp__ul4__li3.textContent = elementsContent.resume[language].exp.exp__ul4__li3;
    elements.resume.exp.exp__ul4__li4.textContent = elementsContent.resume[language].exp.exp__ul4__li4;
    elements.resume.exp.exp__ul4__li5.textContent = elementsContent.resume[language].exp.exp__ul4__li5;
    elements.resume.exp.exp__ul4__li6.textContent = elementsContent.resume[language].exp.exp__ul4__li6;
    elements.resume.exp.exp__ul4__li7.textContent = elementsContent.resume[language].exp.exp__ul4__li7;
    elements.resume.exp.exp__ul4__li8.textContent = elementsContent.resume[language].exp.exp__ul4__li8;
    elements.resume.exp.exp__ul5.textContent = elementsContent.resume[language].exp.exp__ul5;
    elements.resume.exp.exp__ul5__period.textContent = elementsContent.resume[language].exp.exp__ul5__period;
    elements.resume.exp.exp__ul5__li1.textContent = elementsContent.resume[language].exp.exp__ul5__li1;
    elements.resume.exp.exp__ul5__li2.textContent = elementsContent.resume[language].exp.exp__ul5__li2;
    elements.resume.exp.exp__ul5__li3.textContent = elementsContent.resume[language].exp.exp__ul5__li3;
    elements.resume.exp.exp__ul5__li4.textContent = elementsContent.resume[language].exp.exp__ul5__li4;
  }

  if (window.location.pathname.includes("contact.html")) {
    elements.contact.contact.textContent = elementsContent.contact[language].contact;
    elements.contact.inputname.placeholder = elementsContent.contact[language].inputname;
    elements.contact.inputemail.placeholder = elementsContent.contact[language].inputemail;
    elements.contact.inputmessage.placeholder = elementsContent.contact[language].inputmessage;
    elements.contact.checkbox.textContent = elementsContent.contact[language].checkbox;
    elements.contact.submit.textContent = elementsContent.contact[language].submit;
  }
};
