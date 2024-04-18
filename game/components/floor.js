"use strict";
import { createImage } from "../utilities/createImage.js";
import { contextBackground } from "../utilities/getDocumentElements.js";
import { Tile } from "./tile.js";

export class Floor extends Tile {
  static assets = ["/game/assets/floor0.png", "/game/assets/floor1.png", "/game/assets/floor2.png"];
  static assetsShad = ["/game/assets/shadfloor0.png"];

  constructor({ position, imageSrc }) {
    super();
    this.position = position;
    this.imageSrc = imageSrc;
  }

  draw() {
    contextBackground.save();
    contextBackground.beginPath();
    if (this.imageSrc) {
      const image = createImage(this.imageSrc);
      image.onload = () => {
        contextBackground.drawImage(image, this.position.x, this.position.y, this.width, this.height);
      };
    } else {
      contextBackground.rect(this.position.x, this.position.y, this.width, this.height);
      contextBackground.strokeStyle = "white";
      contextBackground.stroke();
    }
    contextBackground.closePath();
    contextBackground.restore();
  }
}
