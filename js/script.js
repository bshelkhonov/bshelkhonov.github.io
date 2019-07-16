"use strict";


function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.body.style.backgroundColor = "#" + getRandInt(0, 1 << 24).toString(16); 

function randBgColor() {
  document.body.style.backgroundColor = "#" + getRandInt(0, 1 << 24).toString(16); 
}