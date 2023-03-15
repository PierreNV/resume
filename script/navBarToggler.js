"use strict";
function navBarToggle() {
  const toggleTarget = document.getElementsByClassName("toggle-target");
  for (let i = 0; i < toggleTarget.length; i++) {
    toggleTarget[i].classList.toggle("display-none");
  }
}
