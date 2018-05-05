/*
  1. use (x,y) and (centerX, centerY) to find the current distance bewteen
     the ball and the center
  2. we have a parameter called "largestDistance" which is the max euclidean
     distance a ball can have
  3. we make a negative relation between the score and the distance with slope 1
  4. such that the closer the higher score
*/
function getScore() {
    var largestDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
    var distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    return Math.round(largestDistance - distanceToCenter);
}

function updateScore() {
  score += getScore(x, y, centerX, centerY);
}
