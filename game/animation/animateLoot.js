"use strict";
import { circleCollidesWithCircle } from "./returnCollisions.js";
import { scoreCounter } from "../utilities/getDocumentElements.js";
import { incrementScore, glitter } from "../utilities/hud.js";
import { incrementMapIndex } from "../map/map.js";
import { youWin } from "../utilities/interludes.js";

export const animateLoot = (pellets, pills, ghosts, player, frame) => {
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
      glitter(scoreCounter);
      incrementScore(10);
    }
  }
  for (let i = pills.length - 1; i >= 0; i--) {
    const powerTimeLapse = 10000;
    const pill = pills[i];
    pill.draw();
    if (circleCollidesWithCircle(pill, player)) {
      pills.splice(i, 1);
      glitter(scoreCounter);
      incrementScore(50);
      player.paint("red", powerTimeLapse);
      ghosts.forEach((ghost) => {
        ghost.scare(powerTimeLapse);
      });
    }
  }
};
