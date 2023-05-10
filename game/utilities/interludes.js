"use strict";
import { hideElem, showElem } from "../functionalities/updateHud";
import { isMobile } from "./device";
import { isFullScreen } from "./display";
import { result, menu, start, progress, title, scoreDigital, fullscreenButton, arrows, ghostIcon, questionMark } from "./getDocumentElements";

export const youWin = () => {
  if (isMobile()) {
    hideElem(arrows);
  }
  result.innerText = "YOU WIN!";
  showElem(result);
  hideElem(ghostIcon);
  start.innerText = "NEXT LEVEL";
  menu.style.display = "flex";
};

export const gameOver = () => {
  if (isMobile()) {
    hideElem(arrows);
  }
  result.innerText = "GAME OVER!";
  showElem(result);
  hideElem(ghostIcon);
  start.innerText = "TRY AGAIN";
  menu.style.display = "flex";
};

export const loading = () => {
  hideElem(result);
  hideElem(scoreDigital);
  hideElem(ghostIcon);
  hideElem(fullscreenButton);
  hideElem(questionMark);
  menu.style.display = "none";
  progress.style.display = "block";
  title.style.display = "block";
};

export const loaded = () => {
  progress.style.display = "";
  title.style.display = "";
  showElem(scoreDigital);
  if (!isFullScreen()) {
    showElem(fullscreenButton);
  }
  if (isMobile()) {
    showElem(arrows);
  }
};
