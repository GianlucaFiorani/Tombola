const tabellone = [];
const tombola = document.getElementById("tombola");
const player = document.getElementById("player");
const numGenration = document.createElement("button");
const estractionDiv = document.getElementById("estration");
const form = document.querySelector("form");
const h1 = document.createElement("h1");
numGenration.innerText = "ESTRAI";
h1.innerText = "TOMBOLA";

const tombolaGeneration = function () {
  for (let i = 0; i < 90; i++) {
    tabellone.push(i + 1);
    const box = document.createElement("div");
    box.classList.add("casella");
    const h3 = document.createElement("h3");
    h3.innerText = i + 1;
    box.appendChild(h3);
    tombola.appendChild(box);
  }
};

const card = function () {
  const playerCard = [...tabellone];
  const container = document.createElement("div");
  for (let i = 0; i < 15; i++) {
    const randNum = Math.ceil(Math.random() * (playerCard.length - 1));
    const playNum = playerCard[randNum];
    const box = document.createElement("div");
    box.classList.add("casella", "player");
    container.classList.add("container");
    const h3 = document.createElement("h3");
    h3.innerText = playNum;
    playerCard.splice(randNum, 1);
    box.appendChild(h3);
    container.appendChild(box);
  }
  player.appendChild(container);
};

const howMany = function (num) {
  for (let i = 0; i < num; i++) {
    card();
  }
};

const win = function () {
  const container = document.querySelectorAll(".container");
  let count = 0;
  container.forEach((box) => {
    const check = box.querySelectorAll(".selected");
    if (check.length === 15) {
      const input = document.getElementById("input");
      numGenration.style.display = "none";
      input.appendChild(h1);
    }
  });
};

h1.onclick = function (e) {
  window.location.reload();
};

form.onsubmit = function (e) {
  e.preventDefault();
  const numCard = document.getElementById("cardNum");
  console.log(numCard.value);
  const num = parseInt(numCard.value);
  howMany(num);
  numCard.style.display = "none";
  const input = document.getElementById("input");
  input.appendChild(numGenration);
};

numGenration.onclick = function (e) {
  e.preventDefault();
  const allBox = document.querySelectorAll(".casella");
  const randNum = Math.floor(Math.random() * (tabellone.length - 1));
  const confNum = tabellone[randNum];
  tabellone.splice(randNum, 1);
  allBox.forEach((num) => {
    const boxNum = parseInt(num.innerText);
    if (boxNum === confNum) {
      num.classList.add("selected");
    }
  });
  win();
};

setInterval(() => {
  h1.style.color = "rgb(255, 230, 156)";
}, 200);
setInterval(() => {
  h1.style.color = "red";
}, 400);

window.addEventListener("DOMContentLoaded", function () {
  tombolaGeneration();
});
