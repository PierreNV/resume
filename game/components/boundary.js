"use strict";

import { contextBackground } from "../utilities/getDocumentElements.js";
import { Tile } from "./tile.js";

export class Boundary extends Tile {
  constructor({ position, color, isHatch }) {
    super();
    this.position = position;
    this.color = color;
    this.isHatch = isHatch;
  }

  draw() {
    contextBackground.save();
    contextBackground.beginPath();
    contextBackground.rect(this.position.x, this.position.y, this.width, this.height);
    contextBackground.strokeStyle = this.color;
    contextBackground.stroke();
    contextBackground.restore();
  }
}
