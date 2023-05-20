"use strict";

import { changeLanguage } from "./languageChanger.js";

if (window.localStorage.getItem("language")) {
  const language = window.localStorage.getItem("language");
  window.location.hash = `${language}`;
}

if (window.location.hash != "") {
  const language = window.location.hash.replace("#", "");
  !window.localStorage.getItem("language") && window.localStorage.setItem("language", `${language}`);
  changeLanguage(language);
}
