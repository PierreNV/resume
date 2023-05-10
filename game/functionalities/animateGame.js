"use strict";
import { arrows, canvasAnim } from "../utilities/getDocumentElements.js";
import { animatePlayer } from "./animatePlayer.js";
import { animateBots } from "./animateBots.js";
import { loot } from "./loot.js";
import { createMap, pellets, powerUps } from "./maps.js";
import { createGhosts } from "../components/ghost.js";
import { createPlayer } from "../components/player.js";
import { glitter, updateScore } from "./updateHud.js";
import { clearCanvas } from "../utilities/clearCanvas.js";
import { isMobile } from "../utilities/device.js";

export let frame = 0;
export let player = {};
export let ghosts = [];

export const init = (map) => {
  frame = 0;
  ghosts = createGhosts(map);
  player = createPlayer(map);
  createMap(map);
  animateGame();

  document.addEventListener("keydown", (e) => {
    if (player.keys[e.key]) {
      e.preventDefault();
      player.keys[e.key].pressed = true;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (player.keys[e.key]) {
      e.preventDefault();
      player.lastKey = e.key;
      player.keys[e.key].pressed = false;
    }
  });

  if (isMobile()) {
    arrows.addEventListener(
      "touchstart",
      (e) => {
        if (player.keys[e.target.id]) {
          e.preventDefault();
          player.keys[e.target.id].pressed = true;
          glitter(e.target);
        }
      },
      { passive: false }
    );

    arrows.addEventListener(
      "touchend",
      (e) => {
        if (player.keys[e.target.id]) {
          e.preventDefault();
          player.lastKey = e.target.id;
          player.keys[e.target.id].pressed = false;
        }
      },
      { passive: false }
    );
  }
};

const animateGame = () => {
  frame = requestAnimationFrame(animateGame);
  clearCanvas(canvasAnim);
  animatePlayer(player);
  animateBots(ghosts, player);
  loot(pellets, powerUps, ghosts, player);
  updateScore();
};