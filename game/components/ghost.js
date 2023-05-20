"use strict";

import { contextAnim } from "../utilities/getDocumentElements.js";
import { ghostIcon } from "../utilities/getDocumentElements.js";
import { addScared, removeScared } from "../utilities/hud.js";
import { Circle } from "./circle.js";
import { Tile } from "./tile.js";

export class Ghost extends Circle {
  static assets = ["/game/assets/ghost-green.png", "/game/assets/ghost-red.png", "/game/assets/ghost-yellow.png", "/game/assets/ghost-turquoise.png"];
  static scaredImg = Ghost.createImage(Ghost.assets[3]);

  constructor({ position, velocity }) {
    super(12);
    this.position = position;
    this.velocity = velocity;
    this.margin = Tile.length / 2 - this.radius;
    this.speed = 1;
    this.img = Ghost.createImage(Ghost.assets[Math.floor(Math.random() * (Ghost.assets.length - 1))]);
    this.direction = "";
    this.isScared = false;
    this.warning = false;
    this.warningOperand = 1;
    this.warningCount = 0;
  }

  static createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
  }

  draw() {
    contextAnim.save();
    contextAnim.beginPath();
    contextAnim.shadowOffsetX = 5;
    contextAnim.shadowOffsetY = 5;
    contextAnim.shadowBlur = 5;
    contextAnim.shadowColor = "grey";
    contextAnim.globalAlpha = 0.75;
    contextAnim.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    this.warning
      ? contextAnim.drawImage(Ghost.scaredImg, this.position.x - 12, this.position.y - 12, 24, 24)
      : contextAnim.drawImage(this.img, this.position.x - 12, this.position.y - 12, 24, 24);
    contextAnim.closePath();
    contextAnim.restore();
  }

  scare(timeLapse) {
    this.isScared = true;
    this.warning = true;
    setTimeout(() => {
      this.isScared = false;
      this.warning = false;
      this.warningOperand = 1;
      this.warningCount = 0;
      removeScared(ghostIcon);
    }, timeLapse);
  }

  warn() {
    if (this.warningCount < 0 || this.warningCount > 1000) {
      this.warningOperand = -this.warningOperand;
      this.warning = !this.warning;
    }

    this.warningCount += this.warningOperand;
    this.warningOperand *= 1.01;
    this.warning ? addScared(ghostIcon) : removeScared(ghostIcon);
  }

  refresh() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.isScared && this.warn();
  }
}

const ghostsSettings = {
  0: {
    0: {
      position: {
        x: Tile.length * 15.5,
        y: Tile.length * 12.5,
      },
      velocity: { x: 0, y: 0 },
    },
    1: {
      position: {
        x: Tile.length * 15.5,
        y: Tile.length * 13.5,
      },
      velocity: { x: 0, y: 0 },
    },
    2: {
      position: {
        x: Tile.length * 16.5,
        y: Tile.length * 12.5,
      },
      velocity: { x: 0, y: 0 },
    },
    3: {
      position: {
        x: Tile.length * 16.5,
        y: Tile.length * 13.5,
      },
      velocity: { x: 0, y: 0 },
    },
  },
  1: {
    0: {
      position: {
        x: Tile.length * 15.5,
        y: Tile.length * 12.5,
      },
      velocity: { x: 0, y: 0 },
    },
    1: {
      position: {
        x: Tile.length * 15.5,
        y: Tile.length * 13.5,
      },
      velocity: { x: 0, y: 0 },
    },
    2: {
      position: {
        x: Tile.length * 16.5,
        y: Tile.length * 12.5,
      },
      velocity: { x: 0, y: 0 },
    },
    3: {
      position: {
        x: Tile.length * 16.5,
        y: Tile.length * 13.5,
      },
      velocity: { x: 0, y: 0 },
    },
  },
  2: {
    0: {
      position: {
        x: Tile.length * 15.5,
        y: Tile.length * 12.5,
      },
      velocity: { x: 0, y: 0 },
    },
    1: {
      position: {
        x: Tile.length * 15.5,
        y: Tile.length * 13.5,
      },
      velocity: { x: 0, y: 0 },
    },
    2: {
      position: {
        x: Tile.length * 16.5,
        y: Tile.length * 12.5,
      },
      velocity: { x: 0, y: 0 },
    },
    3: {
      position: {
        x: Tile.length * 16.5,
        y: Tile.length * 13.5,
      },
      velocity: { x: 0, y: 0 },
    },
  },
};

export const createGhosts = (key) => {
  return [
    new Ghost({
      position: {
        x: ghostsSettings[key][0].position.x,
        y: ghostsSettings[key][0].position.y,
      },
      velocity: { x: ghostsSettings[key][0].velocity.x, y: ghostsSettings[key][0].velocity.y },
    }),
    new Ghost({
      position: {
        x: ghostsSettings[key][1].position.x,
        y: ghostsSettings[key][1].position.y,
      },
      velocity: { x: ghostsSettings[key][1].velocity.x, y: ghostsSettings[key][1].velocity.y },
    }),
    new Ghost({
      position: {
        x: ghostsSettings[key][2].position.x,
        y: ghostsSettings[key][2].position.y,
      },
      velocity: { x: ghostsSettings[key][2].velocity.x, y: ghostsSettings[key][2].velocity.y },
    }),
    new Ghost({
      position: {
        x: ghostsSettings[key][3].position.x,
        y: ghostsSettings[key][3].position.y,
      },
      velocity: { x: ghostsSettings[key][3].velocity.x, y: ghostsSettings[key][3].velocity.y },
    }),
  ];
};
