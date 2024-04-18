"use strict";

import { createImage } from "../utilities/createImage.js";
import { contextBackground } from "../utilities/getDocumentElements.js";
import { Tile } from "./tile.js";

export class Boundary extends Tile {
  static assetsTop = ["/game/assets/walltop0.png", "/game/assets/wall0.png"];

  constructor({ position, imageSrc, isHatch }) {
    super();
    this.position = position;
    this.imageSrc = imageSrc;
    this.isHatch = isHatch;
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
