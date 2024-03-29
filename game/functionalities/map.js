"use strict";

import { Boundary } from "../components/boundary.js";
import { Pellet } from "../components/pellet.js";
import { Pill } from "../components/pill.js";
import { Tile } from "../components/tile.js";

const drafts = {
  0: [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", " ", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", " ", "#", " ", " ", "#", " ", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#"],
    ["#", ".", ".", ".", ".", ".", "*", ".", ".", ".", ".", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", ".", ".", ".", ".", "*", ".", ".", ".", ".", ".", "#"],
    ["#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", " ", ":", ":", ":", ":", " ", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", ":", ":", " ", " ", ":", ":", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", " ", " ", " ", " ", " ", " ", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#", ":", "#", "#", "#", "#", ":", "#", ".", "#", " ", "#", ".", "#", ".", "#", " ", "#", ".", "#"],
    ["#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ":", "#", ":", ":", "#", ":", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#"],
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

const clear = () => {
  map.boundaries = [];
  map.pellets = [];
  map.pills = [];
};

const set = (i) => {
  drafts[i].forEach((row, ri) => {
    row.forEach((symbol, ci) => {
      switch (symbol) {
        case "#":
          map.boundaries.push(
            new Boundary({
              position: {
                x: Tile.length * ci,
                y: Tile.length * ri,
              },
              color: "blue",
            })
          );
          break;
        case ":":
          map.boundaries.push(
            new Boundary({
              position: {
                x: Tile.length * ci,
                y: Tile.length * ri,
              },
              isHatch: true,
            })
          );
          break;
        case ".":
          map.pellets.push(
            new Pellet({
              position: {
                x: Tile.length * ci + Tile.length / 2,
                y: Tile.length * ri + Tile.length / 2,
              },
            })
          );
          break;
        case "*":
          map.pills.push(
            new Pill({
              position: {
                x: Tile.length * ci + Tile.length / 2,
                y: Tile.length * ri + Tile.length / 2,
              },
            })
          );
          break;
      }
    });
  });
};

const draw = (boundaries) => {
  boundaries.forEach((boundary) => {
    if (!boundary.isHatch) boundary.draw();
  });
};

export let map = { index: 0, boundaries: [], pellets: [], pills: [] };

export const createMap = (i) => {
  clear();
  set(i);
  draw(map.boundaries);
};

export const incrementMapIndex = () => {
  if (map.index < Object.keys(drafts).length - 1) {
    map.index += 1;
  }
};

export const resetMapIndex = () => {
  map.index = 0;
};
