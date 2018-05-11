let totalSeconds = 0;
let minutesLabel = "00";
let secondsLabel = "00";

function setTime() {
	++totalSeconds;
	secondsLabel = pad(totalSeconds % 60);
	minutesLabel = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
	let valString = val + "";
	if (valString.length < 2) {
		return "0" + valString;
	} else {
		return valString;
	}
}

function convertToFormat(totalSeconds) {
  console.log(totalSeconds);
	return pad(parseInt(totalSeconds / 60)) + ":" + pad(totalSeconds % 60);
}