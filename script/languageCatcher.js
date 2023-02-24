"use strict";
import {languages, elements} from "./languageContent.js"

if (localStorage.getItem('hash')) {
  location.hash = localStorage.getItem('hash');
}
if (window.location.hash) {
  if (window.location.hash == "#sv") {
    elements.menuLinkHome.textContent = languages.sv.menuLinkHome;
    elements.menuLinkResume.textContent = languages.sv.menuLinkResume;
    elements.menuLinkContact.textContent = languages.sv.menuLinkContact;
    elements.welcome.textContent = languages.sv.welcome;
    elements.firstTextBlock.innerHTML = languages.sv.firstTextBlock;
    elements.cardUlCSS.innerHTML = languages.sv.cardUlCSS;
    elements.cardUlHTML.innerHTML = languages.sv.cardUlHTML;
    elements.cardUlJS.innerHTML = languages.sv.cardUlJS;
    elements.cardUlReactJS.innerHTML = languages.sv.cardUlReactJS;
  }
    else {
      elements.menuLinkHome.textContent = languages.en.menuLinkHome;
      elements.menuLinkResume.textContent = languages.en.menuLinkResume;
      elements.menuLinkContact.textContent = languages.en.menuLinkContact;
      elements.welcome.textContent = languages.en.welcome;
      elements.firstTextBlock.innerHTML = languages.en.firstTextBlock;
      elements.cardUlCSS.innerHTML = languages.en.cardUlCSS;
      elements.cardUlJS.innerHTML = languages.en.cardUlJS;
      elements.cardUlReactJS.innerHTML = languages.en.cardUlReactJS;
    }
  };
  
