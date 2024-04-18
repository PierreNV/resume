"use strict";
import { arrows, canvasAnim } from "../utilities/getDocumentElements.js";
import { animatePlayer } from "./animatePlayer.js";
import { animateBots } from "./animateBots.js";
import { animateLoot } from "./animateLoot.js";
import { createMap, map } from "../map/map.js";
import { glitter, updateScore } from "../utilities/interface.js";
import { clearCanvas } from "../utilities/clearCanvas.js";
import { isMobile } from "../utilities/device.js";

export const gameState = { frame: 0, player: {}, ghosts: [] };

export const init = (i) => {
  enableControls();
  createMap(i);
  resetGameState();
  animateGame();
};

const animateGame = () => {
  loop();
  clearCanvas(canvasAnim);
  animatePlayer(gameState.player);
  animateBots(gameState.ghosts, gameState.player, gameState.frame);
  animateLoot(map.pellets, map.pills, gameState.ghosts, gameState.player, gameState.frame);
  updateScore();
};

const enableControls = () => {
  if (isMobile()) {
    arrows.addEventListener(
      "touchstart",
      (e) => {
        if (gameState.player.keys[e.target.id]) {
          e.preventDefault();
          gameState.player.keys[e.target.id].pressed = true;
          glitter(e.target);
        }
      },
      { passive: false }
    );
    arrows.addEventListener(
      "touchend",
      (e) => {
        if (gameState.player.keys[e.target.id]) {
          e.preventDefault();
          gameState.player.lastKey = e.target.id;
          gameState.player.keys[e.target.id].pressed = false;
        }
      },
      { passive: false }
    );
  } else {
    document.addEventListener("keydown", (e) => {
      if (gameState.player.keys[e.key]) {
        e.preventDefault();
        gameState.player.keys[e.key].pressed = true;
      }
    });
    document.addEventListener("keyup", (e) => {
      if (gameState.player.keys[e.key]) {
        e.preventDefault();
        gameState.player.lastKey = e.key;
        gameState.player.keys[e.key].pressed = false;
      }
    });
  }
};

const loop = () => {
  gameState.frame = requestAnimationFrame(animateGame);
};

const resetGameState = () => {
  gameState.frame = 0;
  gameState.player = map.playerSpawn;
  gameState.ghosts = map.ghostSpawn;
};
