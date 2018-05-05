const localScoreKey = "score";
const localScoreTimeKey = "time";

/*
  lower level methods
*/
function setLocalStorage(name, value) {
  localStorage.setItem(name, value);
}

function getLocalStorage(name) {
  return localStorage.getItem(name);
}

function checkLocalStorage(name) {
  let value = getLocalStorage(name);
  if (value !== null) {
    return true;
  } else {
    return false;
  }
}


/*
  local score methods
*/
function setLocalScore(value) {
  let localScore = getLocalScore();
  if (localScore == null) {
    setLocalStorage(localScoreKey, value);
    setLocalScoreTime(getToday());
  } else if (parseInt(localScore) < value) {
    setLocalStorage(localScoreKey, value);
    setLocalScoreTime(getToday());
  }

}

function getLocalScore() {
  return getLocalStorage(localScoreKey);
}


/*
  local time methods
*/
function setLocalScoreTime(value) {
  setLocalStorage(localScoreTimeKey, value);
}

function getLocalScoreTime() {
  return getLocalStorage(localScoreTimeKey);
}
