"use strict";

document.getElementById("container-dropdown-button").onclick =
  function menuToggle() {
    document
      .getElementById("container-menu-wrapper")
      .classList.toggle("menu-toggle");
    document.getElementById("wrapper").classList.toggle("wrapper-toggle");
  };

document.getElementById("print-button").onclick = function printResume() {
  window.print();
};
