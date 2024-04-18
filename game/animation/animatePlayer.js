"use strict";

import { map } from "../map/map.js";
import { circleCollidesWithRectangle } from "./returnCollisions.js";

export const animatePlayer = (player) => {
  const { keys, lastKey, speed, velocity } = player;

  if (keys.ArrowUp.pressed || velocity.y < 0 || lastKey === "ArrowUp") {
    for (let i = 0; i < map.boundaries.length; i++) {
      if (
        circleCollidesWithRectangle({
          circle: player,
          rectangle: map.boundaries[i],
        })
      ) {
        velocity.y = 0;
        break;
      } else {
        velocity.y = -speed;
      }
    }
  }
  if (keys.ArrowLeft.pressed || velocity.x < 0 || lastKey === "ArrowLeft") {
    for (let i = 0; i < map.boundaries.length; i++) {
      if (
        circleCollidesWithRectangle({
          circle: player,
          rectangle: map.boundaries[i],
        })
      ) {
        velocity.x = 0;
        break;
      } else {
        velocity.x = -speed;
      }
    }
  }
  if (keys.ArrowDown.pressed || velocity.y > 0 || lastKey === "ArrowDown") {
    for (let i = 0; i < map.boundaries.length; i++) {
      if (
        circleCollidesWithRectangle({
          circle: player,
          rectangle: map.boundaries[i],
        })
      ) {
        velocity.y = 0;
        break;
      } else {
        velocity.y = speed;
      }
    }
  }
  if (keys.ArrowRight.pressed || velocity.x > 0 || lastKey === "ArrowRight") {
    for (let i = 0; i < map.boundaries.length; i++) {
      if (
        circleCollidesWithRectangle({
          circle: player,
          rectangle: map.boundaries[i],
        })
      ) {
        velocity.x = 0;
        break;
      } else {
        velocity.x = speed;
      }
    }
  }
  player.refresh();
};
