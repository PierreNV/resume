"use strict";
import { circleCollidesWithRectangle, circleCollidesWithCircle } from "./returnCollisions.js";
import { scoreDigital } from "../utilities/getDocumentElements.js";
import { gameOver } from "../utilities/interludes.js";
import { frame } from "./animateGame.js";
import { glitter, incrementScore } from "../utilities/hud.js";
import { boundaries, resetCurrentMap } from "./maps.js";

export const animateBots = (bots, player) => {
  bots.forEach((bot, i) => {
    const { speed, padding, velocity, isScared } = bot;

    const sides = [
      { id: "up", detection: false },
      { id: "left", detection: false },
      { id: "down", detection: false },
      { id: "right", detection: false },
    ];

    let pathways = [];

    if (circleCollidesWithCircle(bot, player)) {
      if (isScared) {
        if (bots.length == 4) incrementScore(200);
        else if (bots.length == 3) incrementScore(400);
        else if (bots.length == 2) incrementScore(800);
        else if (bots.length == 1) incrementScore(1600);
        bots.splice(i, 1);
        glitter(scoreDigital);
      } else {
        cancelAnimationFrame(frame);
        resetCurrentMap;
        gameOver();
      }
    }

    boundaries.forEach((boundary) => {
      if (
        !sides[0].detection &&
        circleCollidesWithRectangle({
          circle: { ...bot, velocity: { x: 0, y: -speed } },
          rectangle: boundary,
          padding: padding,
        })
      ) {
        sides[0].detection = true;
      } else if (
        !sides[1].detection &&
        circleCollidesWithRectangle({
          circle: { ...bot, velocity: { x: -speed, y: 0 } },
          rectangle: boundary,
          padding: padding,
        })
      ) {
        sides[1].detection = true;
      } else if (
        !boundary.isDoor &&
        !sides[2].detection &&
        circleCollidesWithRectangle({
          circle: { ...bot, velocity: { x: 0, y: speed } },
          rectangle: boundary,
          padding: padding,
        })
      ) {
        sides[2].detection = true;
      } else if (
        !sides[3].detection &&
        circleCollidesWithRectangle({
          circle: { ...bot, velocity: { x: speed, y: 0 } },
          rectangle: boundary,
          padding: padding,
        })
      ) {
        sides[3].detection = true;
      }
    });

    sides.forEach((side) => {
      !side.detection && pathways.unshift(side.id);
    });

    if (bot.direction === "up") {
      pathways = pathways.filter((pathway) => pathway !== "down");
    } else if (bot.direction === "left") {
      pathways = pathways.filter((pathway) => pathway !== "right");
    } else if (bot.direction === "down") {
      pathways = pathways.filter((pathway) => pathway !== "up");
    } else if (bot.direction === "right") {
      pathways = pathways.filter((pathway) => pathway !== "left");
    }

    bot.direction = pathways[Math.floor(Math.random() * pathways.length)];

    switch (bot.direction) {
      case "up":
        velocity.y = -speed;
        velocity.x = 0;
        break;
      case "left":
        velocity.x = -speed;
        velocity.y = 0;
        break;
      case "down":
        velocity.y = speed;
        velocity.x = 0;
        break;
      case "right":
        velocity.x = speed;
        velocity.y = 0;
        break;
    }

    bot.refresh();
  });
};
