import { Ball } from './ball';
import { Gravity } from './gravity';

export class Game {

  static dx = 5;
  static dy = -5;

  width: number;
  height: number;
  centerX: number;
  centerY: number;
  score: number;

  ctx: any;
  ball: any;
  gravity: any;
  drawInterval: any;

  keyPressed: { [key: number]: boolean; };
  // canvas: any;

  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.centerX = canvas.width / 2;
    this.centerY = canvas.height / 2;
    this.score = 0;
    this.ctx = canvas.getContext("2d");
    // this.canvas = canvas;
    this.drawInterval = null;
    this.keyPressed = {
      37: false,
      38: false,
      39: false,
      40: false
    };
    this.ball = new Ball();
    this.gravity = new Gravity();
  }

  start() {
    this.addListener();
    this.drawInterval = setInterval(this.draw, 10);
    this.gravity.start();
  }

  stop() {
    this.gravity.stop();
    clearInterval(this.drawInterval);
    this.clearCanvas();
    this.drawGameover();
  }

  detectCollision() {
    if (this.ball.x + dx > this.width - this.ball.radius / 2) {
      this.stop();
    } else if (this.ball.x + dx < this.ball.radius / 2) {
      this.stop();
    } else if (this.ball.y + dy > this.height - this.ball.radius / 2) {
      this.stop();
    } else if (this.ball.y + dy < this.ball.radius / 2) {
      this.stop();
    }
  }

  addListener() {
    document.onkeydown = function(e: any) {
      e.preventDefault();
      if (e.keyCode == 13) {
        refreshPage();
      }
      keyPressed[e.keyCode] = true;
    }

    document.onkeyup = function(e: any) {
      e.preventDefault();
      keyPressed[e.keyCode] = false;
    }
  }

  getScore(): number {
    const largestDistance: number = Math.sqrt(Math.pow(this.centerX, 2) + Math.pow(this.centerY, 2));
    const distanceToCenter: number = Math.sqrt(Math.pow(this.ball.x - this.centerX, 2) + Math.pow(this.ball.y - this.centerY, 2));
    return Math.round(largestDistance - distanceToCenter);
  }

  updateScore() {
    const scoreToAdd = this.getScore();
    this.score += scoreToAdd;
  }

  applyGravity() {
    this.ball.move(this.gravity.x, 0);
    this.ball.move(0, this.gravity.y);
  }

  keyListen() {
    if (this.keyPressed[37]) {
      this.ball.move(-1 * dx, 0);
    }
    if (this.keyPressed[38]) {
      this.ball.move(0, dy);
    }
    if (this.keyPressed[39]) {
      this.ball.move(dx, 0);
    }
    if (this.keyPressed[40]) {
      this.ball.move(0, -1 * dy);
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawGameover() {
    this.ctx.font = "32px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Gameover", centerX, centerY - 100);
    this.ctx.fillText("Score: " + score, centerX, centerY);
    this.ctx.font = "16px Arial";
    this.ctx.fillText("Press Enter for New Game", centerX, centerY + 100);
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Score: " + this.score, 8, 20);
  }

  draw() {
    this.clearCanvas();
    this.drawBall();
    this.drawScore();
    this.updateScore();
    this.detectionCheck();
    this.keyListen();
  }

}
