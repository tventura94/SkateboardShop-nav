"use strict";

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

let cursor = true;
let speed = 520;

setInterval(() => {
  if (cursor) {
    document.getElementById("cursor").style.opacity = 0;
    cursor = false;
  } else {
    document.getElementById("cursor").style.opacity = 1;
    cursor = true;
  }
}, speed);
