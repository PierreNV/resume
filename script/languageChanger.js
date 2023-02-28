"use strict";

import { elements, elementsContent } from "./LanguageElements.js"

export const changeLanguage = (language) => {
        elements.any.navLinkHome.textContent = elementsContent.any[language].navLinkHome;
        elements.any.navLinkResume.textContent = elementsContent.any[language].navLinkResume;
        elements.any.navLinkContact.textContent = elementsContent.any[language].navLinkContact;
        elements.any.flag.src = elementsContent.any[language].flag;
    
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") { 
        elements.index.welcome.textContent = elementsContent.index[language].welcome;
        elements.index.firstParagraph.textContent = elementsContent.index[language].firstParagraph;
        elements.index.secondParagraph.textContent = elementsContent.index[language].secondParagraph;
        elements.index.thirdParagraph.textContent = elementsContent.index[language].thirdParagraph;
        elements.index.cardCSS.listItem1.textContent = elementsContent.index[language].cardCSS.listItem1;
        elements.index.cardCSS.listItem2.textContent = elementsContent.index[language].cardCSS.listItem2;
        elements.index.cardCSS.listItem3.textContent = elementsContent.index[language].cardCSS.listItem3;
        elements.index.cardHTML.listItem1.textContent = elementsContent.index[language].cardHTML.listItem1;
        elements.index.cardHTML.listItem2.textContent = elementsContent.index[language].cardHTML.listItem2;
        elements.index.cardHTML.listItem3.textContent = elementsContent.index[language].cardHTML.listItem3;
        elements.index.cardJS.listItem1.textContent = elementsContent.index[language].cardJS.listItem1;
        elements.index.cardJS.listItem2.textContent = elementsContent.index[language].cardJS.listItem2;
        elements.index.cardJS.listItem3.textContent = elementsContent.index[language].cardJS.listItem3;
        elements.index.cardReactJS.listItem1.textContent = elementsContent.index[language].cardReactJS.listItem1;
        elements.index.cardReactJS.listItem2.textContent = elementsContent.index[language].cardReactJS.listItem2;
        elements.index.cardReactJS.listItem3.textContent = elementsContent.index[language].cardReactJS.listItem3;
    };
    
    if (window.location.pathname === "/resume.html") {
        elements.resume.contact.home.textContent = elementsContent.resume[language].contact.home;
        elements.resume.contact.phone.textContent = elementsContent.resume[language].contact.phone;
        elements.resume.contact.email.textContent = elementsContent.resume[language].contact.email;
        elements.resume.contact.website.textContent = elementsContent.resume[language].contact.website;
        elements.resume.skills.skills.textContent = elementsContent.resume[language].skills.skills;
        elements.resume.skills.ul1.programming.textContent = elementsContent.resume[language].skills.ul1.programming;
        elements.resume.skills.ul1.codes.textContent = elementsContent.resume[language].skills.ul1.codes;
        elements.resume.skills.ul1.libraries.textContent = elementsContent.resume[language].skills.ul1.libraries;
        elements.resume.skills.ul1.frameworks.textContent = elementsContent.resume[language].skills.ul1.frameworks;
        elements.resume.skills.ul2.service.textContent = elementsContent.resume[language].skills.ul2.service;
        elements.resume.skills.ul2.techsupport.textContent = elementsContent.resume[language].skills.ul2.techsupport;
        elements.resume.skills.ul2.custsupport.textContent = elementsContent.resume[language].skills.ul2.custsupport;
        elements.resume.skills.ul2.finance.textContent = elementsContent.resume[language].skills.ul2.finance;
        elements.resume.skills.ul3.languages.textContent = elementsContent.resume[language].skills.ul3.languages;
        elements.resume.skills.ul3.french.textContent = elementsContent.resume[language].skills.ul3.french;
        elements.resume.skills.ul3.english.textContent = elementsContent.resume[language].skills.ul3.english;
        elements.resume.skills.ul3.swedish.textContent = elementsContent.resume[language].skills.ul3.swedish;
        elements.resume.education.education.textContent = elementsContent.resume[language].education.education;
        elements.resume.education.program.textContent = elementsContent.resume[language].education.program;
        elements.resume.education.codewithmosh.textContent = elementsContent.resume[language].education.codewithmosh;
        elements.resume.education.eco.textContent = elementsContent.resume[language].education.eco;
        elements.resume.education.master.textContent = elementsContent.resume[language].education.master;
        elements.resume.education.bc.textContent = elementsContent.resume[language].education.bc;
        elements.resume.projects.projects.textContent = elementsContent.resume[language].projects.projects;
        elements.resume.projects.repository1.textContent = elementsContent.resume[language].projects.repository;
        elements.resume.projects.repository2.textContent = elementsContent.resume[language].projects.repository;
        elements.resume.exp.exp.textContent = elementsContent.resume[language].exp.exp;
        elements.resume.exp.acc.textContent = elementsContent.resume[language].exp.acc;
        elements.resume.exp.smidig.textContent = elementsContent.resume[language].exp.smidig;
        elements.resume.exp.smidigLi1.textContent = elementsContent.resume[language].exp.smidigLi1;
        elements.resume.exp.smidigLi2.textContent = elementsContent.resume[language].exp.smidigLi2;
        elements.resume.exp.salesAdmin.textContent = elementsContent.resume[language].exp.salesAdmin;
        elements.resume.exp.tetraPeriod.textContent = elementsContent.resume[language].exp.tetraPeriod;
        elements.resume.exp.tetraLi1.textContent = elementsContent.resume[language].exp.tetraLi1;
        elements.resume.exp.tetraLi2.textContent = elementsContent.resume[language].exp.tetraLi2;
        elements.resume.exp.tetraLi3.textContent = elementsContent.resume[language].exp.tetraLi3;
        elements.resume.exp.tetraLi4.textContent = elementsContent.resume[language].exp.tetraLi4;
        elements.resume.exp.tetraLi5.textContent = elementsContent.resume[language].exp.tetraLi5;
        elements.resume.exp.tetraLi6.textContent = elementsContent.resume[language].exp.tetraLi6;
        elements.resume.exp.contractAdmin.textContent = elementsContent.resume[language].exp.contractAdmin;
        elements.resume.exp.sapPeriod.textContent = elementsContent.resume[language].exp.sapPeriod;
        elements.resume.exp.sapLi1.textContent = elementsContent.resume[language].exp.sapLi1;
        elements.resume.exp.sapLi2.textContent = elementsContent.resume[language].exp.sapLi2;
        elements.resume.exp.sapLi3.textContent = elementsContent.resume[language].exp.sapLi3;
        elements.resume.exp.sapLi4.textContent = elementsContent.resume[language].exp.sapLi4;
        elements.resume.exp.sapLi5.textContent = elementsContent.resume[language].exp.sapLi5;
        elements.resume.exp.hrAdmin.textContent = elementsContent.resume[language].exp.hrAdmin;
        elements.resume.exp.jjPeriod.textContent = elementsContent.resume[language].exp.jjPeriod;
        elements.resume.exp.jjLi1.textContent = elementsContent.resume[language].exp.jjLi1;
        elements.resume.exp.jjLi2.textContent = elementsContent.resume[language].exp.jjLi2;
        elements.resume.exp.jjLi3.textContent = elementsContent.resume[language].exp.jjLi3;
        elements.resume.exp.jjLi4.textContent = elementsContent.resume[language].exp.jjLi4;
        elements.resume.exp.jjLi5.textContent = elementsContent.resume[language].exp.jjLi5;
        elements.resume.exp.jjLi6.textContent = elementsContent.resume[language].exp.jjLi6;
        elements.resume.exp.jjLi7.textContent = elementsContent.resume[language].exp.jjLi7;
        elements.resume.exp.jjLi8.textContent = elementsContent.resume[language].exp.jjLi8;
        elements.resume.exp.travelAdv.textContent = elementsContent.resume[language].exp.travelAdv;
        elements.resume.exp.tbPeriod.textContent = elementsContent.resume[language].exp.tbPeriod;
        elements.resume.exp.tbLi1.textContent = elementsContent.resume[language].exp.tbLi1;
        elements.resume.exp.tbLi2.textContent = elementsContent.resume[language].exp.tbLi2;
        elements.resume.exp.tbLi3.textContent = elementsContent.resume[language].exp.tbLi3;
        elements.resume.exp.tbLi4.textContent = elementsContent.resume[language].exp.tbLi4;
    };
    
    if (window.location.pathname === "/contact.html") {
        elements.contact.contact.textContent = elementsContent.contact[language].contact;
        elements.contact.inputname.placeholder = elementsContent.contact[language].inputname;
        elements.contact.inputemail.placeholder = elementsContent.contact[language].inputemail;
        elements.contact.inputmessage.placeholder = elementsContent.contact[language].inputmessage;
        elements.contact.checkbox.textContent = elementsContent.contact[language].checkbox;
        elements.contact.submit.textContent = elementsContent.contact[language].submit;
    };
};