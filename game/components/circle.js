"use strict";

import { Tile } from "./tile.js";

export class Circle {
  constructor(radius = 12) {
    this.radius = radius;
    this.margin = Tile.length / 2 - this.radius;
  }
}
