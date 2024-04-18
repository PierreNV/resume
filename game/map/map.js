"use strict";

import { Boundary } from "../components/boundary.js";
import { Floor } from "../components/floor.js";
import { Ghost } from "../components/ghost.js";
import { Pellet } from "../components/pellet.js";
import { Pill } from "../components/pill.js";
import { Player } from "../components/player.js";
import { Tile } from "../components/tile.js";
import { drafts } from "./drafts.js";

export const map = {
  index: 0,
  boundaries: [],
  pellets: [],
  pills: [],
  floor: [],
  playerSpawn: {},
  ghostSpawn: [],
};

const clearMap = () => {
  map.boundaries = [];
  map.pellets = [];
  map.pills = [];
  map.playerSpawn = {};
  map.ghostSpawn = [];
};

const setMap = (i) => {
  drafts[i].forEach((row, ri) => {
    row.forEach((symbol, ci) => {
      switch (symbol) {
        case "S":
          (map.playerSpawn = new Player({ position: { x: Tile.size * ci + Tile.size / 2, y: Tile.size * ri + Tile.size / 2 }, velocity: { x: 0, y: 0 } })),
            map.floor.push(
              new Floor({
                position: {
                  x: Tile.size * ci,
                  y: Tile.size * ri,
                },
                imageSrc: Floor.assets[Math.floor(Math.random() * Floor.assets.length)],
              })
            );
          break;
        case "G":
          map.ghostSpawn.push(new Ghost({ position: { x: Tile.size * ci + Tile.size / 2, y: Tile.size * ri + Tile.size / 2 }, velocity: { x: 0, y: 0 } }));
          map.floor.push(
            new Floor({
              position: {
                x: Tile.size * ci,
                y: Tile.size * ri,
              },
              imageSrc: Floor.assets[Math.floor(Math.random() * Floor.assets.length)],
            })
          );
          break;
        case "#":
          map.boundaries.push(
            new Boundary({
              position: {
                x: Tile.size * ci,
                y: Tile.size * ri,
              },
              imageSrc: Boundary.assetsTop[0],
              isHatch: false,
            })
          );
          break;
        case "|":
          map.boundaries.push(
            new Boundary({
              position: {
                x: Tile.size * ci,
                y: Tile.size * ri,
              },
              imageSrc: Boundary.assetsTop[1],
              isHatch: false,
            })
          );
          break;
        case " ":
          map.floor.push(
            new Floor({
              position: {
                x: Tile.size * ci,
                y: Tile.size * ri,
              },
              imageSrc: Floor.assets[Math.floor(Math.random() * Floor.assets.length)],
            })
          );
          break;
        case ":":
          map.boundaries.push(
            new Boundary({
              position: {
                x: Tile.size * ci,
                y: Tile.size * ri,
              },
              imageSrc: "",
              isHatch: true,
            })
          );
          map.floor.push(
            new Floor({
              position: {
                x: Tile.size * ci,
                y: Tile.size * ri,
              },
              imageSrc: Floor.assets[Math.floor(Math.random() * Floor.assets.length)],
            })
          );
          break;
        case ".":
          map.pellets.push(
            new Pellet({
              position: {
                x: Tile.size * ci + Tile.size / 2,
                y: Tile.size * ri + Tile.size / 2,
              },
            })
          );
          map.floor.push(
            new Floor({
              position: {
                x: Tile.size * ci,
                y: Tile.size * ri,
              },
              imageSrc: Floor.assets[Math.floor(Math.random() * Floor.assets.length)],
            })
          );
          break;
        case "*":
          map.pills.push(
            new Pill({
              position: {
                x: Tile.size * ci + Tile.size / 2,
                y: Tile.size * ri + Tile.size / 2,
              },
            })
          );
          map.floor.push(
            new Floor({
              position: {
                x: Tile.size * ci,
                y: Tile.size * ri,
              },
              imageSrc: Floor.assets[Math.floor(Math.random() * Floor.assets.length)],
            })
          );
          break;
      }
    });
  });
};

const drawMap = (floor, boundaries) => {
  floor.forEach((floor) => floor.draw());
  boundaries.forEach((boundary) => {
    if (!boundary.isHatch) {
      boundary.draw();
    }
  });
};

export const createMap = (i) => {
  clearMap();
  setMap(i);
  drawMap(map.floor, map.boundaries);
};

export const incrementMapIndex = () => {
  if (map.index < Object.keys(drafts).length - 1) {
    map.index += 1;
  }
};

export const resetMapIndex = () => {
  map.index = 0;
};
