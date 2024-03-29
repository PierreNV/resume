"use strict";
import { circleCollidesWithCircle } from "./returnCollisions.js";
import { scoreDigital } from "../utilities/getDocumentElements.js";
import { incrementScore, glitter } from "../utilities/hud.js";
import { incrementMapIndex } from "./map.js";
import { youWin } from "../utilities/interludes.js";
import { frame } from "./animateGame.js";

export const animateLoot = (pellets, pills, ghosts, player) => {
  if (pellets.length === 0) {
    cancelAnimationFrame(frame);
    incrementMapIndex();
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
  for (let i = pills.length - 1; i >= 0; i--) {
    const powerTimeLapse = 10000;
    const pill = pills[i];
    pill.draw();
    if (circleCollidesWithCircle(pill, player)) {
      pills.splice(i, 1);
      glitter(scoreDigital);
      incrementScore(50);
      player.paint("red", powerTimeLapse);
      ghosts.forEach((ghost) => {
        ghost.scare(powerTimeLapse);
      });
    }
  }
};
