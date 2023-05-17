"use strict";

import { Boundary } from "../components/boundary.js";
import { Pellet } from "../components/pellet.js";
import { PowerUp } from "../components/powerUp.js";

export const drafts = {
  0: [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", " ", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", "#", " ", " ", "#", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", ".", ".", ".", ".", "*", ".", ".", ".", ".", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", ".", ".", ".", ".", "*", ".", ".", ".", ".", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", ":", ":", ":", ":", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ":", ":", " ", " ", ":", ":", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ":", "#", "#", "#", "#", ":", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ":", "#", ":", ":", "#", ":", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ],
  1: [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", " ", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#"],
    ["#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", "#", ".", "#", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", "#", ".", "#", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", " ", "#", " ", " ", "#", " ", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", ":", ":", ":", ":", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", "*", "#", ".", "#", ".", "#", ":", ":", " ", " ", ":", ":", "#", ".", "#", ".", "#", "*", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ":", "#", "#", "#", "#", ":", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ":", "#", ":", ":", "#", ":", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#"],
    ["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ],
  2: [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", " ", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", "*", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", "#", " ", " ", "#", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", ":", ":", ":", ":", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ":", ":", " ", " ", ":", ":", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", "*", "#", ".", "#", ".", "#", ".", "#", ".", "#", ":", "#", "#", "#", "#", ":", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
    ["#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ":", "#", ":", ":", "#", ":", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#"],
    ["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ],
};
export let boundaries = [];
export let pellets = [];
export let powerUps = [];
export let currentMap = 0;

const clearMap = () => {
  boundaries = [];
  pellets = [];
  powerUps = [];
};

const setMap = (key) => {
  drafts[key].forEach((row, ri) => {
    row.forEach((symbol, ci) => {
      switch (symbol) {
        case "#":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * ci,
                y: Boundary.height * ri,
              },
              color: "blue",
              isDoor: false,
            })
          );
          break;
        case ":":
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * ci,
                y: Boundary.height * ri,
              },
              color: "",
              isDoor: true,
            })
          );
          break;
        case ".":
          pellets.push(
            new Pellet({
              position: {
                x: Boundary.width * ci + Boundary.width / 2,
                y: Boundary.height * ri + Boundary.width / 2,
              },
            })
          );
          break;
        case "*":
          powerUps.push(
            new PowerUp({
              position: {
                x: Boundary.width * ci + Boundary.width / 2,
                y: Boundary.height * ri + Boundary.width / 2,
              },
            })
          );
          break;
      }
    });
  });
};

const createBoundaries = (boundaries) => {
  boundaries.forEach((boundary) => {
    if (!boundary.isDoor) boundary.draw();
  });
};

export const createMap = (key) => {
  clearMap();
  setMap(key);
  createBoundaries(boundaries);
};

export const updateCurrentMap = () => {
  if (currentMap < Object.keys(drafts).length - 1) {
    currentMap += 1;
  }
};

export const resetCurrentMap = () => {
  currentMap = 0;
};
