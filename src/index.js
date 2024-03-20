<<<<<<< HEAD
import "./styles.scss";
const intervalTime = 5000;
const button = document.querySelector("button");
const menu = document.querySelector(".menu-container");
button.addEventListener("click", () => {
  if (menu.classList.contains("visible")) {
    menu.classList.remove("visible");
  } else {
    menu.classList.add("visible");
  }
});
const carousel = document.querySelector(".carousel");
carousel.position = 0;
carousel.numberOfChilds = carousel.children.length;
carousel.move = function (direction) {
  if (direction === "left") {
    carousel.position--;
    if (carousel.position < 0) {
      carousel.position = carousel.numberOfChilds - 1;
    }
  } else if (direction === "right") {
    carousel.position++;
    if (carousel.position === carousel.numberOfChilds) {
      carousel.position = 0;
    }
  } else {
    carousel.position = direction;
  }
  carousel.className = "carousel";
  carousel.classList.add(carousel.position);
  console.log(carousel.position);
  carousel.style.left = `-${carousel.position * 512}px`;
  navbar.fillCircle();
  clearInterval(carousel.interval);
  carousel.interval = setInterval(function () {
    carousel.move("right");
  }, intervalTime);
};

const navbar = document.querySelector(".navbar");
navbar.populate = function () {
  for (let i = 0; i < carousel.numberOfChilds; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.addEventListener("click", () => {
      carousel.move(i);
      navbar.fillCircle();
    });
    navbar.appendChild(dot);
  }
};
navbar.fillCircle = function () {
  console.log(navbar.querySelectorAll(".dot"));
  for (let i = 0; i < carousel.numberOfChilds; i++) {
    navbar.querySelectorAll(".dot")[i].classList.remove("filled");
  }
  navbar.querySelectorAll(".dot")[carousel.position].classList.add("filled");
};
navbar.populate();
navbar.fillCircle();

const leftButton = document.querySelector("button#left");
leftButton.addEventListener("click", () => {
  carousel.move("left");
});
const rightButton = document.querySelector("button#right");
rightButton.addEventListener("click", () => {
  carousel.move("right");
});

carousel.interval = setInterval(function () {
  carousel.move("right");
}, intervalTime);
=======
<<<<<<< HEAD
import "./styles.scss";
=======
import "./styles.scss";
import { Notebook } from './logic.js';
import { Display } from './interface'


const notebook = new Notebook();
const display = new Display(notebook);
display.refreshLeft();
display.refreshRight();
notebook.saveStorage();
>>>>>>> 1a1c2cc4b4d9132947ec4a5bb6dff43bc8b34e22
>>>>>>> 167a4e55a73f3c95e395aa46c77016269562cdd7
