"use strict";
import { circleCollidesWithRectangle, circleCollidesWithCircle } from "./returnCollisions";
import { scoreDigital } from "../utilities/getDocumentElements";
import { gameOver } from "../utilities/interludes";
import { frame } from "./animateGame";
import { glitter, incrementScore } from "./updateHud";
import { boundaries, resetCurrentMap } from "./maps";

export const animateBots = (bots, player) => {
  bots.forEach((bot, i) => {
    if (circleCollidesWithCircle(bot, player)) {
      if (bot.isScared) {
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

    const speed = bot.speed;

    const sides = [
      { id: "up", detection: false },
      { id: "left", detection: false },
      { id: "down", detection: false },
      { id: "right", detection: false },
    ];

    boundaries.forEach((boundary) => {
      if (
        !sides[0].detection &&
        circleCollidesWithRectangle({
          circle: { ...bot, velocity: { x: 0, y: -speed } },
          rectangle: boundary,
          padding: bot.padding,
        })
      ) {
        sides[0].detection = true;
      } else if (
        !sides[1].detection &&
        circleCollidesWithRectangle({
          circle: { ...bot, velocity: { x: -speed, y: 0 } },
          rectangle: boundary,
          padding: bot.padding,
        })
      ) {
        sides[1].detection = true;
      } else if (
        !boundary.isDoor &&
        !sides[2].detection &&
        circleCollidesWithRectangle({
          circle: { ...bot, velocity: { x: 0, y: speed } },
          rectangle: boundary,
          padding: bot.padding,
        })
      ) {
        sides[2].detection = true;
      } else if (
        !sides[3].detection &&
        circleCollidesWithRectangle({
          circle: { ...bot, velocity: { x: speed, y: 0 } },
          rectangle: boundary,
          padding: bot.padding,
        })
      ) {
        sides[3].detection = true;
      }
    });

    sides.forEach((side) => {
      if (!side.detection) {
        bot.pathways.unshift(side.id);
      }
    });

    if (bot.direction === "up") {
      bot.pathways = bot.pathways.filter((pathway) => pathway !== "down");
    } else if (bot.direction === "left") {
      bot.pathways = bot.pathways.filter((pathway) => pathway !== "right");
    } else if (bot.direction === "down") {
      bot.pathways = bot.pathways.filter((pathway) => pathway !== "up");
    } else if (bot.direction === "right") {
      bot.pathways = bot.pathways.filter((pathway) => pathway !== "left");
    }

    bot.direction = bot.pathways[Math.floor(Math.random() * bot.pathways.length)];

    switch (bot.direction) {
      case "up":
        bot.velocity.y = -speed;
        bot.velocity.x = 0;
        break;
      case "left":
        bot.velocity.x = -speed;
        bot.velocity.y = 0;
        break;
      case "down":
        bot.velocity.y = speed;
        bot.velocity.x = 0;
        break;
      case "right":
        bot.velocity.x = speed;
        bot.velocity.y = 0;
        break;
    }

    bot.pathways = [];
    bot.update();
  });
};
