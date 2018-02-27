// import from utils.ts
declare function refreshPage();
declare function numberSort(a: number, b: number): number;
declare function getRandomArbitrary(min: number, max: number): number;
declare function getScore(x: number, y: number, centerX: number, centerY: number): number;

// import from cookie.ts
declare function setCookie(cname: string, cvalue: string, exdays: number);
declare function getCookie(cname: string): string;
declare function checkCookie(cname: string): boolean;
declare function deleteCookie(cname: string);

// import from localstorage.ts
declare function setLocalStorage(cname: string, cvalue: string);
declare function getLocalStorage(cname: string): string;
declare function checkLocalStorage(cname: string): boolean;
declare function removeLocalStorage(cname: string);

// Generate a 2D canvas
let canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

/*
  constants for game
  dx, dy: horizontal and vertical speed when users press keys
  cname: cookie name
*/
const ballRadius: number = 10;
const centerX: number = canvas.width / 2;
const centerY: number = canvas.height / 2;
const dx: number = 5;
const dy: number = -5;
const cname: string = 'rank';
const minGravity: number = -5;
const maxGravity: number = 5;

/*
  variables to maintain the game
  x, y: keep the position (x,y) for the ball
  gravityX, gravityY: current gravity force in the field
*/
let x: number = canvas.width / 2;
let y: number = canvas.height / 2;
let gravityX: number = 0;
let gravityY: number = 0;
let score: number = 0;

/*
  intervals for functions to begin and terminated
*/
let gravityInterval: any;
let drawInterval: any;

let r: any; // probably useless

let keyPressed: {[key: number]: boolean; } = {
  37: false,
  38: false,
  39: false,
  40: false
};

document.onkeydown = function(e: any) {
  e.preventDefault()
  if (e.keyCode == 13) {
    refreshPage();
  }
  keyPressed[e.keyCode] = true;
}

document.onkeyup = function(e: any) {
  e.preventDefault()
  keyPressed[e.keyCode] = false;
}

// changes to HTML
function clearRanking() {
  let node: any = document.getElementById("ranking");
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

function drawRanking() {
  clearRanking();
  if (!checkLocalStorage(cname)) {
    return;
  }
  let ranks: string[] = JSON.parse(getLocalStorage(cname));
  ranks = ranks.reverse();
  for (let i = 0; i < ranks.length - 1; i++) {
    let node: any = document.createElement("tr");
    let cell: any = document.createElement("td");
    let cellText: any = document.createTextNode(ranks[i]);
    cell.appendChild(cellText);
    node.appendChild(cell);
    document.getElementById("ranking").appendChild(node);
  }
}

function updateRank(arr: number[], item: number) {
  if (arr.length <= 10) {
    arr.push(item);
    arr.sort(numberSort);
    setLocalStorage(cname, JSON.stringify(arr));
  } else {
    arr.sort(numberSort);
    if (arr[0] >= item) {
      arr.sort(numberSort);
      setLocalStorage(cname, JSON.stringify(arr));
    } else {
      arr[0] = item;
      arr.sort(numberSort);
      setLocalStorage(cname, JSON.stringify(arr));
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

  score += getScore(x, y, centerX, centerY);

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
  let ranks: number[];
  if (checkLocalStorage(cname)) {
    ranks = JSON.parse(getLocalStorage(cname));
  } else {
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
  } else if (x + dx < ballRadius / 2) {
    stopGame();
  } else if (y + dy > canvas.height - ballRadius / 2) {
    stopGame();
  } else if (y + dy < ballRadius / 2) {
    stopGame();
  }
}

drawRanking();
gravityInterval = setInterval(generateGravity, 1000);
drawInterval = setInterval(draw, 10);
