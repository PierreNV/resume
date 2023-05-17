"use strict";
import { circleCollidesWithCircle } from "./returnCollisions.js";
import { scoreDigital } from "../utilities/getDocumentElements.js";
import { incrementScore, glitter } from "../utilities/hud.js";
import { updateCurrentMap } from "./maps.js";
import { youWin } from "../utilities/interludes.js";
import { frame } from "./animateGame.js";

export const loot = (pellets, powerUps, ghosts, player) => {
  if (pellets.length === 0) {
    cancelAnimationFrame(frame);
    updateCurrentMap();
    youWin();
  }

  for (let i = pellets.length - 1; i >= 0; i--) {
    const pellet = pellets[i];
    pellet.draw();
    if (circleCollidesWithCircle(pellet, player)) {
      pellets.splice(i, 1);
      glitter(scoreDigital);
      incrementScore(10);
    }
  }
  for (let i = powerUps.length - 1; i >= 0; i--) {
    const powerUpTimeLapse = 8000;
    const powerUp = powerUps[i];
    powerUp.draw();
    if (circleCollidesWithCircle(powerUp, player)) {
      powerUps.splice(i, 1);
      glitter(scoreDigital);
      incrementScore(50);
      player.swapColors(powerUpTimeLapse);
      ghosts.forEach((ghost) => {
        ghost.beScared(powerUpTimeLapse);
      });
    }
  }
};
