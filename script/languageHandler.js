"use strict";

import {elements, elementsContent} from "./elements.js"

if (window.location.hash != "" || !window.localStorage.getItem('language')) {
  const language = window.location.hash.replace("#", "");
  window.localStorage.setItem('language', `${language}`);
};

if (window.localStorage.getItem('language')) {
  const language = window.localStorage.getItem('language');
  window.location.hash = `${language}`;  
};

if (window.location.hash != "") {
  const language = window.location.hash.replace("#", "");
  // console.log("language:", language);
  // console.log("storage:", window.localStorage);
  changeLanguage(language);
};

function changeLanguage(language) {
  if (elements.any.navLinkHome) elements.any.navLinkHome.textContent = elementsContent.any[language].navLinkHome;
  if (elements.any.navLinkResume) elements.any.navLinkResume.textContent = elementsContent.any[language].navLinkResume;
  if (elements.any.navLinkContact) elements.any.navLinkContact.textContent = elementsContent.any[language].navLinkContact;
  if (elements.index.welcome) elements.index.welcome.textContent = elementsContent.index[language].welcome;
  if (elements.index.firstParagraph) elements.index.firstParagraph.textContent = elementsContent.index[language].firstParagraph;
  if (elements.index.secondParagraph) elements.index.secondParagraph.textContent = elementsContent.index[language].secondParagraph;
  if (elements.index.thirdParagraph) elements.index.thirdParagraph.textContent = elementsContent.index[language].thirdParagraph;
  if (elements.index.cardCSS.listItem1) elements.index.cardCSS.listItem1.textContent = elementsContent.index[language].cardCSS.listItem1;
  if (elements.index.cardCSS.listItem2) elements.index.cardCSS.listItem2.textContent = elementsContent.index[language].cardCSS.listItem2;
  if (elements.index.cardCSS.listItem3) elements.index.cardCSS.listItem3.textContent = elementsContent.index[language].cardCSS.listItem3;
  if (elements.index.cardHTML.listItem1) elements.index.cardHTML.listItem1.textContent = elementsContent.index[language].cardHTML.listItem1;
  if (elements.index.cardHTML.listItem2) elements.index.cardHTML.listItem2.textContent = elementsContent.index[language].cardHTML.listItem2;
  if (elements.index.cardHTML.listItem3) elements.index.cardHTML.listItem3.textContent = elementsContent.index[language].cardHTML.listItem3;
  if (elements.index.cardJS.listItem1) elements.index.cardJS.listItem1.textContent = elementsContent.index[language].cardJS.listItem1;
  if (elements.index.cardJS.listItem2) elements.index.cardJS.listItem2.textContent = elementsContent.index[language].cardJS.listItem2;
  if (elements.index.cardJS.listItem3) elements.index.cardJS.listItem3.textContent = elementsContent.index[language].cardJS.listItem3;
  if (elements.index.cardReactJS.listItem1) elements.index.cardReactJS.listItem1.textContent = elementsContent.index[language].cardReactJS.listItem1;
  if (elements.index.cardReactJS.listItem2) elements.index.cardReactJS.listItem2.textContent = elementsContent.index[language].cardReactJS.listItem2;
  if (elements.index.cardReactJS.listItem3) elements.index.cardReactJS.listItem3.textContent = elementsContent.index[language].cardReactJS.listItem3;
  if (elements.resume.contact.home) elements.resume.contact.home.textContent = elementsContent.resume[language].contact.home;
  if (elements.resume.contact.phone) elements.resume.contact.phone.textContent = elementsContent.resume[language].contact.phone;
  if (elements.resume.contact.email) elements.resume.contact.email.textContent = elementsContent.resume[language].contact.email;
  if (elements.resume.skills.skills) elements.resume.skills.skills.textContent = elementsContent.resume[language].skills.skills;
  if (elements.resume.skills.ul1.programming) elements.resume.skills.ul1.programming.textContent = elementsContent.resume[language].skills.ul1.programming;
  if (elements.resume.skills.ul1.codes) elements.resume.skills.ul1.codes.textContent = elementsContent.resume[language].skills.ul1.codes;
  if (elements.resume.skills.ul1.libraries) elements.resume.skills.ul1.libraries.textContent = elementsContent.resume[language].skills.ul1.libraries;
  if (elements.resume.skills.ul1.frameworks) elements.resume.skills.ul1.frameworks.textContent = elementsContent.resume[language].skills.ul1.frameworks;
  if (elements.resume.skills.ul2.service) elements.resume.skills.ul2.service.textContent = elementsContent.resume[language].skills.ul2.service;
  if (elements.resume.skills.ul2.techsupport) elements.resume.skills.ul2.techsupport.textContent = elementsContent.resume[language].skills.ul2.techsupport;
  if (elements.resume.skills.ul2.custsupport) elements.resume.skills.ul2.custsupport.textContent = elementsContent.resume[language].skills.ul2.custsupport;
  if (elements.resume.skills.ul2.finance) elements.resume.skills.ul2.finance.textContent = elementsContent.resume[language].skills.ul2.finance;
  if (elements.resume.skills.ul3.languages) elements.resume.skills.ul3.languages.textContent = elementsContent.resume[language].skills.ul3.languages;
  if (elements.resume.skills.ul3.french) elements.resume.skills.ul3.french.textContent = elementsContent.resume[language].skills.ul3.french;
  if (elements.resume.skills.ul3.english) elements.resume.skills.ul3.english.textContent = elementsContent.resume[language].skills.ul3.english;
  if (elements.resume.skills.ul3.swedish) elements.resume.skills.ul3.swedish.textContent = elementsContent.resume[language].skills.ul3.swedish;
  if (elements.resume.education.education) elements.resume.education.education.textContent = elementsContent.resume[language].education.education;
  if (elements.resume.education.program) elements.resume.education.program.textContent = elementsContent.resume[language].education.program;
  if (elements.resume.education.codewithmosh) elements.resume.education.codewithmosh.textContent = elementsContent.resume[language].education.codewithmosh;
  if (elements.resume.education.eco) elements.resume.education.eco.textContent = elementsContent.resume[language].education.eco;
  if (elements.resume.education.master) elements.resume.education.master.textContent = elementsContent.resume[language].education.master;
  if (elements.resume.education.bc) elements.resume.education.bc.textContent = elementsContent.resume[language].education.bc;
  if (elements.resume.projects.projects) elements.resume.projects.projects.textContent = elementsContent.resume[language].projects.projects;
  if (elements.resume.projects.repository1) elements.resume.projects.repository1.textContent = elementsContent.resume[language].projects.repository;
  if (elements.resume.projects.repository2) elements.resume.projects.repository2.textContent = elementsContent.resume[language].projects.repository;
  if (elements.resume.exp.exp) elements.resume.exp.exp.textContent = elementsContent.resume[language].exp.exp;
  if (elements.resume.exp.acc) elements.resume.exp.acc.textContent = elementsContent.resume[language].exp.acc;
  if (elements.resume.exp.smidig) elements.resume.exp.smidig.textContent = elementsContent.resume[language].exp.smidig;
  if (elements.resume.exp.smidigLi1) elements.resume.exp.smidigLi1.textContent = elementsContent.resume[language].exp.smidigLi1;
  if (elements.resume.exp.smidigLi2) elements.resume.exp.smidigLi2.textContent = elementsContent.resume[language].exp.smidigLi2;
  if (elements.resume.exp.salesAdmin) elements.resume.exp.salesAdmin.textContent = elementsContent.resume[language].exp.salesAdmin;
  if (elements.resume.exp.tetraPeriod) elements.resume.exp.tetraPeriod.textContent = elementsContent.resume[language].exp.tetraPeriod;
  if (elements.resume.exp.tetraLi1) elements.resume.exp.tetraLi1.textContent = elementsContent.resume[language].exp.tetraLi1;
  if (elements.resume.exp.tetraLi2) elements.resume.exp.tetraLi2.textContent = elementsContent.resume[language].exp.tetraLi2;
  if (elements.resume.exp.tetraLi3) elements.resume.exp.tetraLi3.textContent = elementsContent.resume[language].exp.tetraLi3;
  if (elements.resume.exp.tetraLi4) elements.resume.exp.tetraLi4.textContent = elementsContent.resume[language].exp.tetraLi4;
  if (elements.resume.exp.tetraLi5) elements.resume.exp.tetraLi5.textContent = elementsContent.resume[language].exp.tetraLi5;
  if (elements.resume.exp.tetraLi6) elements.resume.exp.tetraLi6.textContent = elementsContent.resume[language].exp.tetraLi6;
  if (elements.resume.exp.contractAdmin) elements.resume.exp.contractAdmin.textContent = elementsContent.resume[language].exp.contractAdmin;
  if (elements.resume.exp.sapPeriod) elements.resume.exp.sapPeriod.textContent = elementsContent.resume[language].exp.sapPeriod;
  if (elements.resume.exp.sapLi1) elements.resume.exp.sapLi1.textContent = elementsContent.resume[language].exp.sapLi1;
  if (elements.resume.exp.sapLi2) elements.resume.exp.sapLi2.textContent = elementsContent.resume[language].exp.sapLi2;
  if (elements.resume.exp.sapLi3) elements.resume.exp.sapLi3.textContent = elementsContent.resume[language].exp.sapLi3;
  if (elements.resume.exp.sapLi4) elements.resume.exp.sapLi4.textContent = elementsContent.resume[language].exp.sapLi4;
  if (elements.resume.exp.sapLi5) elements.resume.exp.sapLi5.textContent = elementsContent.resume[language].exp.sapLi5;
  if (elements.resume.exp.hrAdmin) elements.resume.exp.hrAdmin.textContent = elementsContent.resume[language].exp.hrAdmin;
  if (elements.resume.exp.jjPeriod) elements.resume.exp.jjPeriod.textContent = elementsContent.resume[language].exp.jjPeriod;
  if (elements.resume.exp.jjLi1) elements.resume.exp.jjLi1.textContent = elementsContent.resume[language].exp.jjLi1;
  if (elements.resume.exp.jjLi2) elements.resume.exp.jjLi2.textContent = elementsContent.resume[language].exp.jjLi2;
  if (elements.resume.exp.jjLi3) elements.resume.exp.jjLi3.textContent = elementsContent.resume[language].exp.jjLi3;
  if (elements.resume.exp.jjLi4) elements.resume.exp.jjLi4.textContent = elementsContent.resume[language].exp.jjLi4;
  if (elements.resume.exp.jjLi5) elements.resume.exp.jjLi5.textContent = elementsContent.resume[language].exp.jjLi5;
  if (elements.resume.exp.jjLi6) elements.resume.exp.jjLi6.textContent = elementsContent.resume[language].exp.jjLi6;
  if (elements.resume.exp.jjLi7) elements.resume.exp.jjLi7.textContent = elementsContent.resume[language].exp.jjLi7;
  if (elements.resume.exp.jjLi8) elements.resume.exp.jjLi8.textContent = elementsContent.resume[language].exp.jjLi8;
  if (elements.resume.exp.travelAdv) elements.resume.exp.travelAdv.textContent = elementsContent.resume[language].exp.travelAdv;
  if (elements.resume.exp.tbPeriod) elements.resume.exp.tbPeriod.textContent = elementsContent.resume[language].exp.tbPeriod;
  if (elements.resume.exp.tbLi1) elements.resume.exp.tbLi1.textContent = elementsContent.resume[language].exp.tbLi1;
  if (elements.resume.exp.tbLi2) elements.resume.exp.tbLi2.textContent = elementsContent.resume[language].exp.tbLi2;
  if (elements.resume.exp.tbLi3) elements.resume.exp.tbLi3.textContent = elementsContent.resume[language].exp.tbLi3;
  if (elements.resume.exp.tbLi4) elements.resume.exp.tbLi4.textContent = elementsContent.resume[language].exp.tbLi4;
  if (elements.contact.contact) elements.contact.contact.textContent = elementsContent.contact[language].contact;
  if (elements.contact.inputname) elements.contact.inputname.placeholder = elementsContent.contact[language].inputname;
  if (elements.contact.inputemail) elements.contact.inputemail.placeholder = elementsContent.contact[language].inputemail;
  if (elements.contact.inputmessage) elements.contact.inputmessage.placeholder = elementsContent.contact[language].inputmessage;
  if (elements.contact.checkbox) elements.contact.checkbox.textContent = elementsContent.contact[language].checkbox;
  if (elements.contact.submit) elements.contact.submit.textContent = elementsContent.contact[language].submit;
  };


  
