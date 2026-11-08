// Exercise 13: Show System Uptime
// Goal: print how long the system has been running, in seconds.
// Required: os.uptime() - returns the uptime in seconds.
// It is a synchronous system call, but keep the flow callback-friendly
// (e.g. a main function that takes a callback).
//
// Expected output:
//   System uptime: 52300 seconds
//
// Run: node ex13.js

const os = require("os");
function main(callback) {
  const uptime = os.uptime();
  callback(null, uptime);
}

main((err, uptime) => {
  if (err) {
    console.error("Error getting system uptime:", err);
  } else {
    console.log(`System uptime: ${uptime} seconds`);
  }
});