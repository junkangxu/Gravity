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
// get date today
function getToday() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // Jan is 0
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}
