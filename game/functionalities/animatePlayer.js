"use strict";

import { boundaries } from "./maps.js";
import { circleCollidesWithRectangle } from "./returnCollisions.js";

export const animatePlayer = (player) => {
  const speed = player.speed;

  if (player.keys.ArrowUp.pressed || player.velocity.y < 0 || player.lastKey === "ArrowUp") {
    for (let i = 0; i < boundaries.length; i++) {
      if (
        circleCollidesWithRectangle({
          circle: { ...player, velocity: { x: 0, y: -speed } },
          rectangle: boundaries[i],
          padding: player.padding,
        })
      ) {
        player.velocity.y = 0;
        break;
      } else {
        player.velocity.y = -speed;
      }
    }
  }
  if (player.keys.ArrowLeft.pressed || player.velocity.x < 0 || player.lastKey === "ArrowLeft") {
    for (let i = 0; i < boundaries.length; i++) {
      if (
        circleCollidesWithRectangle({
          circle: { ...player, velocity: { x: -speed, y: 0 } },
          rectangle: boundaries[i],
          padding: player.padding,
        })
      ) {
        player.velocity.x = 0;
        break;
      } else {
        player.velocity.x = -speed;
      }
    }
  }
  if (player.keys.ArrowDown.pressed || player.velocity.y > 0 || player.lastKey === "ArrowDown") {
    for (let i = 0; i < boundaries.length; i++) {
      if (
        circleCollidesWithRectangle({
          circle: { ...player, velocity: { x: 0, y: speed } },
          rectangle: boundaries[i],
          padding: player.padding,
        })
      ) {
        player.velocity.y = 0;
        break;
      } else {
        player.velocity.y = speed;
      }
    }
  }
  if (player.keys.ArrowRight.pressed || player.velocity.x > 0 || player.lastKey === "ArrowRight") {
    for (let i = 0; i < boundaries.length; i++) {
      if (
        circleCollidesWithRectangle({
          circle: { ...player, velocity: { x: speed, y: 0 } },
          rectangle: boundaries[i],
          padding: player.padding,
        })
      ) {
        player.velocity.x = 0;
        break;
      } else {
        player.velocity.x = speed;
      }
    }
  }
  player.update();
};
