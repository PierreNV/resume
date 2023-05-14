"use strict";
import { hideElem, showElem } from "../functionalities/updateHud.js";
import { isMobile } from "./device.js";
import { isFullScreen } from "./display.js";
import { overlay, result, menu, start, progress, title, scoreDigital, fullscreenButton, arrows, ghostIcon, questionMark, pauseButton } from "./getDocumentElements.js";

export const youWin = () => {
  if (isMobile()) {
    hideElem(arrows);
  }
  overlay.classList.add("backdrop-darken");
  result.innerText = "YOU WIN!";
  start.innerText = "NEXT LEVEL";
  hideElem(ghostIcon);
  hideElem(pauseButton);
  showElem(result);
  showElem(menu);
};

export const gameOver = () => {
  if (isMobile()) {
    hideElem(arrows);
  }
  overlay.classList.add("backdrop-darken");
  result.innerText = "GAME OVER!";
  start.innerText = "TRY AGAIN";
  hideElem(ghostIcon);
  hideElem(pauseButton);
  showElem(result);
  showElem(menu);
};

export const loading = () => {
  overlay.classList.remove("backdrop-darken");
  progress.style.display = "block";
  title.style.display = "block";
  hideElem(result);
  hideElem(scoreDigital);
  hideElem(ghostIcon);
  hideElem(fullscreenButton);
  hideElem(questionMark);
  hideElem(menu);
};

export const loaded = () => {
  progress.style.display = "";
  title.style.display = "";
  showElem(scoreDigital);
  showElem(ghostIcon);
  showElem(pauseButton);
  if (!isFullScreen()) {
    showElem(fullscreenButton);
  }
  if (isMobile()) {
    showElem(arrows);
  }
};
