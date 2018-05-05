function drawGameover() {
  ctx.font = "32px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.textAlign = "center";
  ctx.fillText("Gameover", centerX, centerY - 100);
  ctx.fillText("Score: " + score, centerX, centerY);
  ctx.font = "16px Arial";
  ctx.fillText("press ENTER for new game", centerX, centerY + 100);
  setLocalScore(score);
}

function drawGameStart() {
  ctx.font = "32px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.textAlign = "center";
  ctx.fillText("Welcome", centerX, centerY - 20);
  ctx.font = "16px Arial";
  ctx.fillText("press SPACE to start game", centerX, centerY + 20);
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.textAlign = "start";
  ctx.fillText("Score: " + score, 8, 20);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function detectionCheck() {
  if (x + dx > canvas.width - ballRadius / 2) {
    stopGame();
  } else if (x + dx < ballRadius / 2) {
    stopGame();
  } else if (y + dy > canvas.height - ballRadius / 2) {
    stopGame();
  } else if (y + dy < ballRadius / 2) {
    stopGame();
  }
}
