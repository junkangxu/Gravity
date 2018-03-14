export class Ball {

  static radius = 10;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.radius = 10;
    this.x = x;
    this.y = y;
  }

  move(dx, dy): void {
    this.x += dx;
    this.y += dy
  }

}
