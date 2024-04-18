"use strict";
import { start, wrapper, fullscreenButton, questionMark, instruction } from "./utilities/getDocumentElements.js";
import { isFullScreen, openFullscreen } from "./utilities/display.js";
import { init } from "./animation/animateGame.js";
import { map } from "./map/map.js";
import { hideElem, showElem } from "./utilities/interface.js";

start.addEventListener("click", (e) => {
  e.preventDefault;
  init(map.index);
});

fullscreenButton.addEventListener("click", (e) => {
  e.preventDefault();
  openFullscreen(wrapper);
});

questionMark.addEventListener("click", (e) => {
  e.preventDefault();
  instruction.classList.toggle("hidden");
});

wrapper.addEventListener("fullscreenchange", () => {
  isFullScreen() ? hideElem(fullscreenButton) : showElem(fullscreenButton);
});

// pauseButton.addEventListener("click", (e) => {
//   e.preventDefault;
//   cancelAnimationFrame(frame);
// document.removeEventListener()
// });
