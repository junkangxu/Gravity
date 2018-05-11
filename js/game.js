// Generate a 2D canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
/*
  constants for the game
*/
const ballRadius = 6;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const dx = 5;
const dy = -5;
const rankName = 'rank';
/*
  global variables to maintain the game
*/
let x = centerX;
let y = centerY;
let gravityX = 0;
let gravityY = 0;
let score = 0;
let gravityInterval;
let drawInterval;

// gameplan changes
function beginGame() {
  clearCanvas();
  drawBall();
  drawBackground();
  drawScore();
  updateScore();
  applyGravity();
  detectionCheck();
  listenKeyboard();
}

function stopGame() {
    clearInterval(gravityInterval);
    clearInterval(drawInterval);
    clearCanvas();
    drawGameover();
}
