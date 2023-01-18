const counter1Fxn = () => {
  const number = Number(document.querySelector(".counter1").textContent);
  if (number >= 500) {
    clearInterval(interval);
  } else {
    const counter = number + 1;
    document.querySelector(".counter1").textContent = counter;
  }
};
const counter2Fxn = () => {
  const number = Number(document.querySelector(".counter2").textContent);
  if (number >= 10) {
    clearInterval(interval1);
  } else {
    const counter = number + 1;
    document.querySelector(".counter2").textContent = counter;
  }
};
const counter3Fxn = () => {
  const number = Number(document.querySelector(".counter3").textContent);
  if (number >= 5) {
    clearInterval(interval2);
  } else {
    const counter = number + 1;
    document.querySelector(".counter3").textContent = counter;
  }
};

let interval = setInterval(counter1Fxn, 5);
let interval1 = setInterval(counter2Fxn, 450);
let interval2 = setInterval(counter3Fxn, 950);
