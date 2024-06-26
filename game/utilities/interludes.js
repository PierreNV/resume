"use strict";
import { hideElem, showElem } from "./interface.js";
import { isMobile } from "./device.js";
import { isFullScreen } from "./display.js";
import { overlay, result, menu, start, progress, title, scoreCounter, fullscreenButton, arrows, ghostIcon, questionMark, pauseButton, instruction } from "./getDocumentElements.js";

export const win = () => {
  if (isMobile()) {
    arrows.style.display = "none";
  }
  overlay.classList.add("backdrop-darken");
  result.innerText = "YOU WIN!";
  start.innerText = "NEXT LEVEL";
  hideElem(ghostIcon);
  showElem(result);
  showElem(menu);
};

export const gameOver = () => {
  if (isMobile()) {
    arrows.style.display = "none";
  }
  overlay.classList.add("backdrop-darken");
  result.innerText = "GAME OVER!";
  start.innerText = "TRY AGAIN";
  hideElem(ghostIcon);
  showElem(result);
  showElem(menu);
};

export const loading = () => {
  overlay.classList.add("bg-dark-night");
  progress.style.display = "block";
  title.style.display = "block";
  hideElem(instruction);
  hideElem(result);
  hideElem(scoreCounter);
  hideElem(ghostIcon);
  hideElem(fullscreenButton);
  hideElem(questionMark);
  hideElem(menu);
};

export const loaded = () => {
  overlay.classList.remove("backdrop-darken");
  overlay.classList.remove("bg-dark-night");
  progress.style.display = "";
  title.style.display = "";
  showElem(scoreCounter);
  showElem(ghostIcon);
  if (!isFullScreen()) {
    showElem(fullscreenButton);
  }
  if (isMobile()) {
    arrows.style.display = "flex";
  }
};
