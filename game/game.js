"use strict";
import { start, wrapper, fullscreenButton, questionMark, instruction } from "./utilities/getDocumentElements.js";
import { isFullScreen, openFullscreen } from "./utilities/display.js";
import { loading, loaded } from "./utilities/interludes.js";
import { clearCanvasAll } from "./utilities/clearCanvas.js";
import { init } from "./functionalities/animateGame.js";
import { currentMap } from "./functionalities/maps.js";
import { hideElem, resetScore, showElem } from "./functionalities/updateHud.js";

start.addEventListener("click", (e) => {
  e.preventDefault;
  clearCanvasAll();
  loading();
  if (currentMap === 0) {
    resetScore();
  }
  setTimeout(() => {
    init(currentMap);
    loaded();
  }, 4000);
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
