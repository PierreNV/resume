"use strict";
import { contextAnim } from "../utilities/getDocumentElements.js";

export class PowerUp {
  constructor({ position }) {
    this.position = position;
    this.radius = 4;
  }

  draw() {
    contextAnim.save();
    contextAnim.beginPath();
    contextAnim.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    contextAnim.fillStyle = "turquoise";
    contextAnim.fill();
    contextAnim.closePath();
    contextAnim.restore();
  }
}
