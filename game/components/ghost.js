"use strict";

import { contextAnim } from "../utilities/getDocumentElements.js";
import { createImage } from "../utilities/createImage.js";
import { ghostIcon } from "../utilities/getDocumentElements.js";
import { addScared, removeScared } from "../utilities/hud.js";
import { Circle } from "./circle.js";
import { Tile } from "./tile.js";

export class Ghost extends Circle {
  static assets = ["/game/assets/ghost-green.png", "/game/assets/ghost-red.png", "/game/assets/ghost-yellow.png", "/game/assets/ghost-turquoise.png"];

  constructor({ position, velocity }) {
    super(12);
    this.position = position;
    this.velocity = velocity;
    this.margin = Tile.size / 2 - this.radius;
    this.speed = 1;
    this.img = createImage(Ghost.assets[Math.floor(Math.random() * (Ghost.assets.length - 1))]);
    this.scaredImg = createImage(Ghost.assets[3]);
    this.direction = "";
    this.isScared = false;
    this.warning = false;
    this.warningOperand = 1;
    this.warningCount = 0;
  }

  draw() {
    contextAnim.save();
    contextAnim.beginPath();
    contextAnim.shadowOffsetX = 5;
    contextAnim.shadowOffsetY = 5;
    contextAnim.shadowBlur = 5;
    contextAnim.shadowColor = "grey";
    contextAnim.globalAlpha = 0.75;

    if (this.img) {
      this.warning
        ? contextAnim.drawImage(this.scaredImg, this.position.x - 12, this.position.y - 12, Tile.size, Tile.size)
        : contextAnim.drawImage(this.img, this.position.x - 12, this.position.y - 12, Tile.size, Tile.size);
    } else {
      contextAnim.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    }
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
