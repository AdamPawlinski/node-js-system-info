var os = require('os');
var timeOS = os.uptime();

function timeConvert(time) {
  if (timeOS >= 3600) {
    var timeHour = Math.floor(timeOS / 3600);
    var timeMin = Math.floor((timeOS % 3600) / 60);
    var timeSec = (timeOS % 3600 % 60).toFixed(0);
    time = timeHour + " hours " + timeMin + " min " + timeSec + " sec";
    return time;
  } else if (timeOS >= 60) {
    var timeMin = Math.floor(timeOS / 60);
    var timeSec = (timeOS % 60 % 60).toFixed(0);
    time =  timeMin + " min " + timeSec + " sec";
    return time;
  }
}

exports.print = timeConvert;
