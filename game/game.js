"use strict";
import { start, wrapper, fullscreenButton, questionMark, instruction } from "./utilities/getDocumentElements";
import { isFullScreen, openFullscreen } from "./utilities/display";
import { loading, loaded } from "./utilities/interludes";
import { clearCanvasAll } from "./utilities/clearCanvas";
import { init } from "./functionalities/animateGame";
import { currentMap } from "./functionalities/maps";
import { hideElem, resetScore, showElem } from "./functionalities/updateHud";

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
