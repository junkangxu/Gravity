// Generate a 2D canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
/*
  constants for game
  dx, dy: horizontal and vertical speed when users press keys
  cname: cookie name
*/
var ballRadius = 10;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var dx = 5;
var dy = -5;
var cname = 'rank';
var minGravity = -5;
var maxGravity = 5;
var largestDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
/*
  variables to maintain the game
  x, y: keep the position (x,y) for the ball
  gravityX, gravityY: current gravity force in the field
*/
var x = canvas.width / 2;
var y = canvas.height / 2;
var gravityX = 0;
var gravityY = 0;
var score = 0;
/*
  intervals for functions to begin and terminated
*/
var gravityInterval;
var drawInterval;
var r; // probably useless
var keyPressed = {
    37: false,
    38: false,
    39: false,
    40: false
};
document.onkeydown = function (e) {
    if (e.keyCode == 13) {
        refreshPage();
    }
    keyPressed[e.keyCode] = true;
};
document.onkeyup = function (e) {
    keyPressed[e.keyCode] = false;
};
// changes to HTML
function drawRanking() {
    if (!checkLocalStorage(cname)) {
        return;
    }
    var arr = getLocalStorage(cname);
    var ranks = JSON.parse(arr);
    ranks = ranks.reverse();
    for (var i = 0; i < ranks.length - 1; i++) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(ranks[i]);
        if (ranks[i] == score.toString()) {
            node.className = "list-group-item active";
        }
        else {
            node.className = "list-group-item";
        }
        node.appendChild(textnode);
        document.getElementById("ranking").appendChild(node);
    }
}
function updateRank(arr, item) {
    if (arr.length <= 10) {
        arr.push(item);
        arr.sort(numberSort);
        var json_arr = JSON.stringify(arr);
        setLocalStorage(cname, json_arr);
    }
    else {
        arr.sort(numberSort);
        var smallestVal = arr[0];
        if (smallestVal >= item) {
            arr.sort(numberSort);
            var json_arr = JSON.stringify(arr);
            setLocalStorage(cname, json_arr);
        }
        else {
            arr[0] = item;
            arr.sort(numberSort);
            var json_arr = JSON.stringify(arr);
            setLocalStorage(cname, json_arr);
        }
    }
}
// canvas changes
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawGameover() {
    ctx.font = "32px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.textAlign = "center";
    ctx.fillText("Gameover", centerX, centerY - 100);
    ctx.fillText("Score: " + score, centerX, centerY);
    ctx.font = "16px Arial";
    ctx.fillText("Press Enter for New Game", centerX, centerY + 100);
}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    clearCanvas();
    drawBall();
    drawScore();
    score += getScore(x, y, centerX, centerY, largestDistance);
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
// gameplan changes
function generateGravity() {
    gravityX = getRandomArbitrary(minGravity, maxGravity);
    gravityY = getRandomArbitrary(minGravity, maxGravity);
}
function stopGame() {
    clearInterval(gravityInterval);
    clearInterval(drawInterval);
    var ranks;
    if (checkLocalStorage(cname)) {
        ranks = JSON.parse(getLocalStorage(cname));
    }
    else {
        ranks = [];
    }
    updateRank(ranks, score);
    clearCanvas();
    drawGameover();
    drawRanking();
}
function detectionCheck() {
    if (x + dx > canvas.width - ballRadius / 2) {
        stopGame();
    }
    else if (x + dx < ballRadius / 2) {
        stopGame();
    }
    else if (y + dy > canvas.height - ballRadius / 2) {
        stopGame();
    }
    else if (y + dy < ballRadius / 2) {
        stopGame();
    }
}
drawRanking();
gravityInterval = setInterval(generateGravity, 1000);
drawInterval = setInterval(draw, 10);
