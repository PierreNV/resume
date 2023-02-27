"use strict";

import {changeLanguage} from "./languageChanger.js";

if (!window.localStorage.getItem('language') && window.location.hash != "") {
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


  
