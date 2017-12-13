var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

// TODO: Generate gravity

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var keyDownHandler = function(e) {
  switch (e.keyCode) {
    case 37:
      console.log('left');
      break;
    case 38:
      console.log('up');
      break;
    case 39:
      console.log('right');
      break;
    case 40;
      console.log('down');
      break;
  }
}

var keyUpHandler = function(e) {
  switch (e.keyCode) {
    case 37:
      console.log('left');
      break;
    case 38:
      console.log('up');
      break;
    case 39:
      console.log('right');
      break;
    case 40;
      console.log('down');
      break;
  }
}


var drawBall = function() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

var detectionCheck = function() {
  if (x + dx > canvas.width - ballRadius) {

  } else if (x + dx < ballRadius) {

  } else if (y + dy > canvas.height - ballRadius) {

  } else if (y + dy < ballRadius) {

  }
}

var draw = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}

setInterval(draw, 10);
