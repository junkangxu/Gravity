// sort function for numbers
function numberSort(a, b) {
    return a - b;
}
// refresh page for new game
function refreshPage() {
    window.location.reload(false);
}
// generate arbitrary number
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getScore(x, y, centerX, centerY, largestDistance) {
    var distanceToCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    return Math.round(largestDistance - distanceToCenter);
}
