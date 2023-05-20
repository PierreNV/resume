"use strict ";

export class Tile {
  static length = 40;

  constructor(length = Tile.length) {
    this.width = this.height = length;
  }
}
