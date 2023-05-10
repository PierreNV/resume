"use strict";

import { isMobile } from "./device.js";

export const openFullscreen = (elem) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
  if (isMobile()) window.screen.orientation.lock("landscape");
};

export const isFullScreen = () => {
  return document.fullscreenElement;
};
