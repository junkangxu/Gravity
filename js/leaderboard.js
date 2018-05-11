let localHighScore = getLocalScore();
let HighScoreTime = getLocalScoreTime();
let localLongDuration = convertToFormat(parseInt(getLocalDuration()));
let LongDurationTime = getLocalDurationTime();

document.getElementById('localHighScore').innerHTML = localHighScore;
document.getElementById('highScoreTime').innerHTML = HighScoreTime;

document.getElementById('localLongDuration').innerHTML = localLongDuration;
document.getElementById('longDurationTime').innerHTML = LongDurationTime;
