import { ball } from './ball';

export class Game {

  static dx = 5;
  static dy = -5;

  width: number;
  height: number;
  centerX: number;
  centerY: number;
  score: number;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.score = 0;
  }

  start() {

  }

  stop() {

  }

  detectCollision() {

  }

}
