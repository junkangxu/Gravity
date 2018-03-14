declare function getRandomArbitrary(min: number, max: number): number;

export class Gravity {

  static minGravity = -5;
  static maxGravity = 5;

  x: number;
  y: number;
  gravityInterval: any;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.gravityInterval = null;
  }

  start(): void {
    this.gravityInterval = setInterval(this.generateNewGravity(), 1000);
  }

  stop(): void {
    clearInterval(gravityInterval);
  }

  generateNewGravity(): void {
    this.x = getRandomArbitrary(Gravity.minGravity, Gravity.maxGravity);
    this.y = getRandomArbitrary(Gravity.minGravity, Gravity.maxGravity);
  }

}
