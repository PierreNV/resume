"use strict";

if (window.location.pathname.toString().includes("pierrenv.github.io")) {
  console.log(window.location.pathname.toString());
  window.location.replace("https://pierre-neveu-resume.netlify.app/");
  window.location.reload(true);
}
