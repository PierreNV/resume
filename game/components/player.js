"use strict";

import { contextAnim } from "../utilities/getDocumentElements.js";
import { Circle } from "./circle.js";
import { Tile } from "./tile.js";

export class Player extends Circle {
  constructor({ position, velocity }) {
    super(12);
    this.margin = Tile.size / 2 - this.radius;
    this.keys = {
      ArrowUp: { pressed: false },
      ArrowLeft: { pressed: false },
      ArrowDown: { pressed: false },
      ArrowRight: { pressed: false },
    };
    this.lastKey = [];
    this.position = position;
    this.velocity = velocity;
    this.radians = 0.5;
    this.openRate = 0.1;
    this.rotation = 0;
    this.speed = 1;
    this.color = "yellow";
  }

  draw() {
    contextAnim.save();
    contextAnim.translate(this.position.x, this.position.y);
    contextAnim.rotate(this.rotation);
    contextAnim.translate(-this.position.x, -this.position.y);
    contextAnim.beginPath();
    contextAnim.arc(this.position.x, this.position.y, this.radius, this.radians, Math.PI * 2 - this.radians);
    contextAnim.lineTo(this.position.x, this.position.y);
    contextAnim.fillStyle = this.color;
    contextAnim.fill();
    contextAnim.closePath();
    contextAnim.restore();
  }

  chew() {
    if (this.radians < 0 || this.radians > 0.75) {
      this.openRate = -this.openRate;
    }
    this.radians += this.openRate;
  }

  rotate() {
    if (this.velocity.x > 0) {
      this.rotation = 0;
    }
    if (this.velocity.x < 0) {
      this.rotation = Math.PI;
    }
    if (this.velocity.y > 0) {
      this.rotation = Math.PI / 2;
    }
    if (this.velocity.y < 0) {
      this.rotation = Math.PI * 1.5;
    }
  }

  paint(color, timeLapse) {
    this.color = color;
    setTimeout(() => {
      this.color = "yellow";
    }, timeLapse);
  }

  refresh() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.chew();
    this.rotate();
  }
}

export const createPlayer = ({ x, y }) => {
  return new Player({
    position: {
      x: x,
      y: y,
    },
    velocity: { x: 0, y: 0 },
  });
};
