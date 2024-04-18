"use strict ";

export class Tile {
  static size = 24;

  constructor(size = Tile.size) {
    this.width = this.height = size;
  }
}
