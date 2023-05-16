"use strict";
import { scoreDigital } from "./getDocumentElements.js";

let score = 0;

export const incrementScore = (points) => {
  score += points;
};

export const resetScore = () => {
  score = 0;
};

export const updateScore = () => {
  scoreDigital.textContent = score;
};

export const showElem = (elem) => {
  elem.classList.remove("hidden");
};
export const hideElem = (elem) => {
  elem.classList.add("hidden");
};

export const addScared = (elem) => {
  elem.classList.add("scared");
};
export const removeScared = (elem) => {
  elem.classList.remove("scared");
};

export const glitter = (elem) => {
  elem.classList.add("glitter");
  setTimeout(() => {
    elem.classList.remove("glitter");
  }, 500);
};
