/*
  1. use (x,y) and (centerX, centerY) to find the current distance bewteen
     the ball and the center
  2. the score per update is the same as showed on the target
*/
function getScore() {
    let distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

    if (distanceToCenter < 50) {
    	return 10;
    } else if (distanceToCenter < 100) {
    	return 8;
    } else if (distanceToCenter < 150) {
    	return 6;
    } else if (distanceToCenter < 200) {
    	return 4;
    } else if (distanceToCenter < 250) {
    	return 0;
    } else {
    	return 0;
    }
}

function updateScore() {
	score += getScore();
}
