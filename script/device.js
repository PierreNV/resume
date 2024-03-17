"use strict";

export const isMobile = () => {
  return "ontouchstart" in window;
};
