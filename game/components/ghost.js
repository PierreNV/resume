"use strict";

import { contextAnim } from "../utilities/getDocumentElements.js";
import { Boundary } from "./boundary.js";
import { ghostIcon } from "../utilities/getDocumentElements.js";
import { showElem, hideElem, glitter, turnBlue, removeBlue } from "../functionalities/updateHud.js";

export class Ghost {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 12;
    this.padding = Boundary.width / 2 - this.radius;
    this.pathways = [];
    this.direction = "";
    this.isScared = false;
    this.warning = false;
    this.warningCount = 0;
    this.warningRate = 1;
    this.assets = ["/ghost-green.png", "/ghost-red.png", "/ghost-yellow.png"];
    this.scaredImage = this.createImage("ghost-turquoise.png");
    this.img = this.createImage(this.assets[Math.floor(Math.random() * this.assets.length)]);
    this.speed = 1;
  }

  createImage(src) {
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
    if (this.warning) {
      contextAnim.drawImage(this.scaredImage, this.position.x - 12, this.position.y - 12, 24, 24);
    } else {
      contextAnim.drawImage(this.img, this.position.x - 12, this.position.y - 12, 24, 24);
    }
    contextAnim.closePath();
    contextAnim.restore();
  }

  getScared(timeLapse) {
    this.isScared = true;
    this.warning = true;
    showElem(ghostIcon);
    glitter(ghostIcon);
    turnBlue(ghostIcon);
    setTimeout(() => {
      this.isScared = false;
      this.warning = false;
      this.warningRate = 1;
      removeBlue(ghostIcon);
      hideElem(ghostIcon);
    }, timeLapse);
  }

  warn() {
    if (this.warningCount < 0 || this.warningCount > 500) {
      this.warning = !this.warning;
      this.warningRate = -this.warningRate;
    }
    this.warningCount += this.warningRate;
    this.warningRate *= 1.01;
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.isScared) this.warn();
  }
}

const ghostsSettings = {
  0: {
    0: {
      position: {
        x: Boundary.width * 15 + Boundary.width / 2,
        y: Boundary.height * 12 + Boundary.height / 2,
      },
      velocity: { x: 0, y: 0 },
    },
    1: {
      position: {
        x: Boundary.width * 15 + Boundary.width / 2,
        y: Boundary.height * 13 + Boundary.height / 2,
      },
      velocity: { x: Ghost.speed, y: 0 },
    },
    2: {
      position: {
        x: Boundary.width * 16 + Boundary.width / 2,
        y: Boundary.height * 12 + Boundary.height / 2,
      },
      velocity: { x: 0, y: -Ghost.speed },
    },
    3: {
      position: {
        x: Boundary.width * 16 + Boundary.width / 2,
        y: Boundary.height * 13 + Boundary.height / 2,
      },
      velocity: { x: 0, y: -Ghost.speed },
    },
  },
  1: {
    0: {
      position: {
        x: Boundary.width * 15 + Boundary.width / 2,
        y: Boundary.height * 12 + Boundary.height / 2,
      },
      velocity: { x: 0, y: 0 },
    },
    1: {
      position: {
        x: Boundary.width * 15 + Boundary.width / 2,
        y: Boundary.height * 13 + Boundary.height / 2,
      },
      velocity: { x: Ghost.speed, y: 0 },
    },
    2: {
      position: {
        x: Boundary.width * 16 + Boundary.width / 2,
        y: Boundary.height * 12 + Boundary.height / 2,
      },
      velocity: { x: 0, y: -Ghost.speed },
    },
    3: {
      position: {
        x: Boundary.width * 16 + Boundary.width / 2,
        y: Boundary.height * 13 + Boundary.height / 2,
      },
      velocity: { x: 0, y: -Ghost.speed },
    },
  },
  2: {
    0: {
      position: {
        x: Boundary.width * 15 + Boundary.width / 2,
        y: Boundary.height * 12 + Boundary.height / 2,
      },
      velocity: { x: 0, y: 0 },
    },
    1: {
      position: {
        x: Boundary.width * 15 + Boundary.width / 2,
        y: Boundary.height * 13 + Boundary.height / 2,
      },
      velocity: { x: Ghost.speed, y: 0 },
    },
    2: {
      position: {
        x: Boundary.width * 16 + Boundary.width / 2,
        y: Boundary.height * 12 + Boundary.height / 2,
      },
      velocity: { x: 0, y: -Ghost.speed },
    },
    3: {
      position: {
        x: Boundary.width * 16 + Boundary.width / 2,
        y: Boundary.height * 13 + Boundary.height / 2,
      },
      velocity: { x: 0, y: -Ghost.speed },
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
