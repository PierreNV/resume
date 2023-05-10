"use strict";

import { contextAnim } from "../utilities/getDocumentElements";

export class Pellet {
  constructor({ position }) {
    this.position = position;
    this.radius = 3;
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
