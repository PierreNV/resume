"use strict";
import { contextAnim } from "../utilities/getDocumentElements.js";
import { Circle } from "./circle.js";

export class Pill extends Circle {
  constructor({ position }) {
    super(4);
    this.position = position;
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
