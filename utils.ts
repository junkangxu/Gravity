// sort function for numbers
function numberSort(a: number, b: number): number {
  return a - b;
}

// refresh page for new game
function refreshPage() {
  window.location.reload(false);
}

// generate arbitrary number
function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/*
  1. use (x,y) and (centerX, centerY) to find the current distance bewteen
     the ball and the center
  2. we have a parameter called "largestDistance" which is the max euclidean
     distance a ball can have
  3. we make a negative relation between the score and the distance with slope 1
  4. such that the closer the higher score
*/
function getScore(x: number, y: number, centerX: number, centerY: number): number {
  const largestDistance: number = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
  var distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
  return Math.round(largestDistance - distanceToCenter);
}
