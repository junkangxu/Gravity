declare function getRandomArbitrary(min: number, max: number): number;

export class Gravity {

  static minGravity = -5;
  static maxGravity = 5;

  gravityX: number;
  gravityY: number;
  gravityInterval: any;
  constructor() {
    this.gravityX = 0;
    this.gravityY = 0;
    this.gravityInterval = null;
  }

  start(): void {
    this.gravityInterval = setInterval(this.generateNewGravity(), 1000);
  }

  stop(): void {
    clearInterval(gravityInterval);
  }

  generateNewGravity(): void {
    this.gravityX = getRandomArbitrary(Gravity.minGravity, Gravity.maxGravity);
    this.gravityY = getRandomArbitrary(Gravity.minGravity, Gravity.maxGravity);
  }

}
