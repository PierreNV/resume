"use strict";
import { arrows, canvasAnim } from "../utilities/getDocumentElements.js";
import { animatePlayer } from "./animatePlayer.js";
import { animateBots } from "./animateBots.js";
import { animateLoot } from "./animateLoot.js";
import { createMap, map } from "./map.js";
import { createGhosts } from "../components/ghost.js";
import { createPlayer } from "../components/player.js";
import { glitter, updateScore } from "../utilities/hud.js";
import { clearCanvas } from "../utilities/clearCanvas.js";
import { isMobile } from "../utilities/device.js";

let player = {};
let ghosts = [];

export let frame = 0;

export const init = (i) => {
  frame = 0;
  ghosts = createGhosts(i);
  player = createPlayer(i);

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
  } else {
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
  }

  createMap(i);
  animateGame();
};

const animateGame = () => {
  frame = requestAnimationFrame(animateGame);
  clearCanvas(canvasAnim);
  animatePlayer(player);
  animateBots(ghosts, player);
  animateLoot(map.pellets, map.pills, ghosts, player);
  updateScore();
};
