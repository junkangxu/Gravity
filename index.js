var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const ballRadius = 10;

var x = canvas.width / 2;
var y = canvas.height / 2;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const dx = 5;
const dy = -5;

const cname = 'rank';

const minGravity = -5;
const maxGravity = 5;

var gravityX = 0;
var gravityY = 0;

var score = 0;

var gravityInterval;
var drawInterval;

var r;

var keyPressed = {
  37: false,
  38: false,
  39: false,
  40: false
}

document.onkeydown = function(e) {
  keyPressed[e.keyCode] = true;
}

document.onkeyup = function(e) {
  keyPressed[e.keyCode] = false;
}

var calculateDistance = function() {
  return Math.round(10000 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
}

var getRandomArbitrary = function(min, max) {
  return Math.random() * (max - min) + min;
}

var generateGravity = function() {
  gravityX = getRandomArbitrary(minGravity, maxGravity);
  gravityY = getRandomArbitrary(minGravity, maxGravity);
}

var drawScore = function() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

var drawBall = function() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

var stopGame = function() {
  clearInterval(gravityInterval);
  clearInterval(drawInterval);
  var ranks;
  if (checkCookie(cname)) {
    ranks = getCookie(cname);
    ranks = JSON.parse(ranks);
  } else {
    ranks = [];
  }
  updateRank(ranks, score);
  r = confirm("Game Over\n Score: " + score);
  if (r == true) {
    window.location.reload(false);
  } else {
    window.location.reload(false);
  }
}

var detectionCheck = function() {
  if (x + dx > canvas.width - ballRadius) {
    stopGame();
  } else if (x + dx < ballRadius) {
    stopGame();
  } else if (y + dy > canvas.height - ballRadius) {
    stopGame();
  } else if (y + dy < ballRadius) {
    stopGame();
  }
}

var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawScore();
  score += calculateDistance();
  x += gravityX;
  y += gravityY;
  detectionCheck();
  if (keyPressed[37]) {
    x -= dx;
  }

  if (keyPressed[38]) {
    y += dy;
  }

  if (keyPressed[39]) {
    x += dx;
  }

  if (keyPressed[40]) {
    y -= dy;
  }

}

gravityInterval = setInterval(generateGravity, 1000);
drawInterval = setInterval(draw, 10);
