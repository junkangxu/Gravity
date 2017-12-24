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

function getScore(x: number, y: number, centerX: number, centerY: number, largestDistance: number): number {
  var distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
  return Math.round(largestDistance - distanceToCenter);
}
