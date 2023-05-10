"use strict";
import { circleCollidesWithCircle } from "./returnCollisions";
import { scoreDigital } from "../utilities/getDocumentElements";
import { incrementScore, glitter } from "./updateHud";
import { updateCurrentMap } from "./maps";
import { youWin } from "../utilities/interludes";
import { frame } from "./animateGame";

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
        ghost.getScared(powerUpTimeLapse);
      });
    }
  }
};
