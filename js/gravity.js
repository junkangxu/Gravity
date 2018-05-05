const maxGravity = 5;
const minGravity = -5;

function generateGravity() {
    gravityX = getRandomArbitrary(minGravity, maxGravity);
    gravityY = getRandomArbitrary(minGravity, maxGravity);
}

function applyGravity() {
  x += gravityX;
  y += gravityY;
}
