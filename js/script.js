"use strict";


function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function decToHex(num) {
  num = num.toString(16);
  while (num.length < 6) {
    num = "0" + num;
  } 
  return "#" + num;
}


function getRandomParam() {
  return "linear-gradient(" + 
          getRandInt(0, 360) + 
          "deg, " + 
          decToHex(getRandInt(0, 1 << 24)) + ", " + decToHex(getRandInt(0, 1 << 24)) + ")";
}

document.body.style.background = getRandomParam();

function randBgColor() {
  document.body.style.background = getRandomParam();
}
