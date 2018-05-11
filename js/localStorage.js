const localScoreKey = "score";
const localScoreTimeKey = "time";
const localDurationKey = "duration";
const localDurationTimeKey = "durationTime";

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
  local time for score methods
*/
function setLocalScoreTime(value) {
  setLocalStorage(localScoreTimeKey, value);
}

function getLocalScoreTime() {
  return getLocalStorage(localScoreTimeKey);
}

/*
  local duration methods
*/
function setLocalDuration(totalSeconds) {
  let localDuration = getLocalDuration();
  if (localDuration == null) {
    setLocalStorage(localDurationKey, totalSeconds);
    setLocalDurationTime(getToday());
  } else {
    localDuration = parseInt(localDuration);
    if (totalSeconds > localDuration) {
      setLocalStorage(localDurationKey, totalSeconds);
      setLocalDurationTime(getToday());
    }
  }
}

function getLocalDuration() {
  return getLocalStorage(localDurationKey);
}

/*
  local time for duration methods
*/
function setLocalDurationTime(value) {
  setLocalStorage(localDurationTimeKey, value);
}

function getLocalDurationTime() {
  return getLocalStorage(localDurationTimeKey);
}