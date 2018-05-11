function drawGameover() {
  ctx.font = "32px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.textAlign = "center";
  ctx.fillText("Gameover", centerX, centerY - 100);
  ctx.fillText("Score: " + score, centerX, centerY);
  ctx.font = "16px Arial";
  ctx.fillText("press ENTER for new game", centerX, centerY + 100);
  setLocalScore(score);
  setLocalDuration(totalSeconds);
}

function drawGameStart() {
  drawScore();
  drawCounter();
  ctx.font = "32px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.textAlign = "center";
  ctx.fillText("Welcome", centerX, centerY - 20);
  ctx.font = "16px Arial";
  ctx.fillText("press SPACE to start game", centerX, centerY + 20);
}

function drawScore() {
  metadataCtx.font = "16px Arial";
  metadataCtx.fillStyle = "#0095DD";
  metadataCtx.textAlign = "start";
  metadataCtx.fillText("Score: " + score, 8, 20);
}

function drawCounter() {
  metadataCtx.font = "16px Arial";
  metadataCtx.fillStyle = "#0095DD";
  metadataCtx.textAlign = "start";
  metadataCtx.fillText(minutesLabel + ":" + secondsLabel, 312, 20);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawBackground() {
  let radius = 50;
  while(radius < canvas.width || radius < canvas.height) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#0095DD";
    ctx.stroke();
    ctx.closePath();
    radius += 50;
  }
}

function drawScoreLabel() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.textAlign = "center";
  ctx.setLineDash([5, 15]);
  // labels with 10 sccore
  ctx.fillText("10", centerX, centerY + 5);
  // labels with 8 score
  ctx.fillText("8", centerX - 75, centerY + 5);
  ctx.fillText("8", centerX + 75, centerY + 5);
  ctx.fillText("8", centerX, centerY + 80);
  ctx.fillText("8", centerX, centerY - 70);
  // labels with 6 score
  ctx.fillText("6", centerX - 125, centerY + 5);
  ctx.fillText("6", centerX + 125, centerY + 5);
  ctx.fillText("6", centerX, centerY + 130);
  ctx.fillText("6", centerX, centerY - 120);
  // labels with 4 score
  ctx.fillText("4", centerX - 170, centerY + 5);
  ctx.fillText("4", centerX + 170, centerY + 5);
  ctx.fillText("4", centerX, centerY + 175);
  ctx.fillText("4", centerX, centerY - 165);
  // labels with 2 score
  ctx.fillText("2", centerX, centerY - 220);
  ctx.fillText("2", centerX, centerY + 230);
}

function clearMetadataCanvas() {
  metadataCtx.clearRect(0, 0, metadataCanvas.width, metadataCanvas.height);
}

function clearGameCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearCanvas() {
  clearGameCanvas();
  clearMetadataCanvas();
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
