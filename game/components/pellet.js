"use strict";

import { contextAnim } from "../utilities/getDocumentElements.js";
import { Circle } from "./circle.js";

export class Pellet extends Circle {
  constructor({ position }) {
    super(3);
    this.position = position;
  }

  draw() {
    contextAnim.save();
    contextAnim.beginPath();
    contextAnim.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    contextAnim.fillStyle = "white";
    contextAnim.fill();
    contextAnim.closePath();
    contextAnim.restore();
  }
}
