"use strict";

import {elements, ElementsContent} from "./Elements.js"

if (localStorage.getItem('language')) {
  const language = localStorage.getItem('language');
  changeLanguage(language);
};

function changeLanguage(language) {
  if (elements.any.navLinkHome) elements.any.navLinkHome.textContent = ElementsContent.any[language].navLinkHome;
  if (elements.any.navLinkResume) elements.any.navLinkResume.textContent = ElementsContent.any[language].navLinkResume;
  if (elements.any.navLinkContact) elements.any.navLinkContact.textContent = ElementsContent.any[language].navLinkContact;
  if (elements.index.welcome) elements.index.welcome.textContent = ElementsContent.index[language].welcome;
  if (elements.index.firstParagraph) elements.index.firstParagraph.textContent = ElementsContent.index[language].firstParagraph;
  if (elements.index.secondParagraph) elements.index.secondParagraph.textContent = ElementsContent.index[language].secondParagraph;
  if (elements.index.thirdParagraph) elements.index.thirdParagraph.textContent = ElementsContent.index[language].thirdParagraph;
  if (elements.index.cardUlCSS) elements.index.cardUlCSS.innerHTML = ElementsContent.index[language].cardUlCSS;
  if (elements.index.cardUlHTML) elements.index.cardUlHTML.innerHTML = ElementsContent.index[language].cardUlHTML;
  if (elements.index.cardUlJS) elements.index.cardUlJS.innerHTML = ElementsContent.index[language].cardUlJS;
  if (elements.index.cardUlReactJS) elements.index.cardUlReactJS.innerHTML = ElementsContent.index[language].cardUlCSS;
  };


  
