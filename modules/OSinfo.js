var os = require('os');
var timeConvert = require('./timeConvert')

function getOSinfo() {
  var type = os.type();
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = timeConvert.print();
  var userInfo = os.userInfo();

  if (type === "Darwin") {
    type = "OSX";
  } else if (type === "Windows_NT") {
    type = "Windows";
  };
  
  console.log("System: ", type);
  console.log("Release: ", release);
  console.log("CPU model: ", cpu);
  console.log("Uptime: ~", uptime);
  console.log("User name: ", userInfo.username);
  console.log("User name: ", userInfo.homedir);
};

exports.print = getOSinfo;
