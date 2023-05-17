"use strict";

import { contextBackground } from "../utilities/getDocumentElements.js";

export class Boundary {
  static width = 40;
  static height = 40;

  constructor({ position, color, isDoor }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
    this.isDoor = isDoor;
    this.color = color;
  }

  draw() {
    contextBackground.save();
    contextBackground.shadowOffsetX = 5;
    contextBackground.shadowOffsetY = 5;
    contextBackground.shadowBlur = 5;
    contextBackground.shadowColor = this.color;
    contextBackground.beginPath();
    contextBackground.rect(this.position.x, this.position.y, this.width, this.height);
    contextBackground.strokeStyle = this.color;
    contextBackground.stroke();
    contextBackground.restore();
  }
}
