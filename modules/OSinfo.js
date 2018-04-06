var os = require('os');
var colors = require('colors');
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

  console.log("System: " .bold.yellow, type);
  console.log("Release: ".yellow, release);
  console.log("CPU model: " .bold.red, cpu);
  console.log("Uptime: ~" .red, uptime);
  console.log("User name: " .bold.bgBlue, userInfo.username);
  console.log("User directory: " .underline.bgBlue, userInfo.homedir);
};

exports.print = getOSinfo;
