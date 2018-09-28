"use strict";

/*
Based on original example 'keyboard.js' from npm sphero package.
*/

/* eslint no-use-before-define: 0 */
/* eslint no-process-exit: 0 */

var sphero = require("sphero");

// make sure you install this first - `npm install keypress`
var keypress = require("keypress");

var orb = sphero(process.env.PORT);

orb.connect(listen);
var d = 0;
var v = 60;
function handle(ch, key) {
  var stop = orb.roll.bind(orb, 0, 0),
      roll = orb.roll.bind(orb, v);
  if (key.ctrl && key.name === "c") {
    process.stdin.pause();
    process.exit();
  }

  if (key.name === "e") {
    orb.startCalibration();
  }

  if (key.name === "q") {
    orb.finishCalibration();
  }

  if (key.name === "up") {
    roll(0);
  }

  if (key.name === "down") {
    roll(180);
  }

  if (key.name === "left") {
    roll(270);
  }

  if (key.name === "right") {
    roll(90);
  }

  if (key.name === "space") {
    stop();
    orb.color("red", 0.5);
    setTimeout(()=> {
       orb.color("white", -0.5);
    },3000);
  }

  if (key.name === "w") {
    if(v < 200) v = v+10;
    roll(d);
    console.log(`Speed is now ${v}`);
  }

  if (key.name === "s") {
    if(v > 0) v = v-10;
    roll(d);
    console.log(`Speed is now ${v}`);
  }

  if (key.name === "d") {
    if(d > 0) { d = d-10; }
    roll(d);
    console.log(`Direction is now ${d}`);
  }

  if (key.name === "a") {
    if(d < 200) { d = d+10; }
    roll(d);
    console.log(`Direction is now ${d}`);
  }

  //Some colors
  if (key.name === "r") {
    orb.color("red", 0.5);
  }
  if (key.name === "g") {
    orb.color("green", 0.5);
  }
  if (key.name === "b") {
    orb.color("blue", 0.5);
  }
  if (key.name === "y") {
    orb.color("yellow", 0);
  }
  if (key.name === "m") {
    orb.color("magenta", 0.5);
  }
  if (key.name === "o") {
    orb.color("orange", 0.5);
  }
  if (key.name === "p") {
    orb.color("pink", 0.5);
  }
}

function listen() {
  keypress(process.stdin);
  process.stdin.on("keypress", handle);

  console.log("starting to listen for arrow key presses");

  process.stdin.setRawMode(true);
  process.stdin.resume();
}
