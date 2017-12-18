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

var refreshPage = function() {
  window.location.reload(false);
}

var drawRanking = function() {
  if (!checkCookie(cname)) {
    return;
  }
  var arr = getCookie(cname);
  var ranks = JSON.parse(arr);
  ranks = ranks.reverse();
  for (var i = 0; i < ranks.length - 1; i++) {
    var node = document.createElement("LI")
    var textnode = document.createTextNode(ranks[i]);
    node.className = "list-group-item";
    node.appendChild(textnode);
    document.getElementById("ranking").appendChild(node);
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 13) {
    refreshPage();
  }
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

var clearCanvas = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var drawGameover = function() {
  ctx.font = "32px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.textAlign="center";
  ctx.fillText("Gameover", centerX, centerY - 100);
  ctx.fillText("Score: " + score, centerX, centerY);
  ctx.font = "16px Arial";
  ctx.fillText("Press Enter For New Game", centerX, centerY + 100);
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

var updateRank = function(arr, item) {
  if (arr.length <= 10) {
    arr.push(item);
    arr.sort(numberSort);
    var json_arr = JSON.stringify(arr);
    setCookie(cname, json_arr, 7);
  } else {
    arr.sort(numberSort);
    var smallestVal = arr[0];
    if (smallestVal >= item) {
      arr.sort(numberSort);
      var json_arr = JSON.stringify(arr);
      setCookie(cname, json_arr, 7);
    } else {
      arr[0] = item;
      arr.sort(numberSort);
      var json_arr = JSON.stringify(arr);
      setCookie(cname, json_arr, 7);
    }
  }
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
  clearCanvas();
  drawGameover();
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
  clearCanvas();
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

drawRanking();
gravityInterval = setInterval(generateGravity, 1000);
drawInterval = setInterval(draw, 10);
