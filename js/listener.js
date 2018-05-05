let keyPressed = {
  37: false,
  38: false,
  39: false,
  40: false,
  65: false,
  68: false,
  83: false,
  87: false
};

document.onkeydown = function(e) {
  e.preventDefault();
  if (e.keyCode == 13) {
    refreshPage();
  }
  if (e.keyCode == 32) {
    gravityInterval = setInterval(generateGravity, 1000);
    drawInterval = setInterval(beginGame, 10);
  }
  keyPressed[e.keyCode] = true;
}

document.onkeyup = function(e) {
  e.preventDefault();
  keyPressed[e.keyCode] = false;
}

function listenKeyboard() {
  if (keyPressed[37] || keyPressed[65]) {
    x -= dx;
  }
  if (keyPressed[38] || keyPressed[87]) {
    y += dy;
  }
  if (keyPressed[39] || keyPressed[68]) {
    x += dx;
  }
  if (keyPressed[40] || keyPressed[83]) {
    y -= dy;
  }
}
