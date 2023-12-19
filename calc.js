let a = ""; //первое число
let b = ""; //второе чилос
let sign = ""; //знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

// Экран

const out = document.querySelector(`.calc-screen p`);

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".buttons").addEventListener("click", (event) => {
  if (!event.target.classList.contains(`btn`)) return;

  if (event.target.classList.contains(`ac`)) {
    clearAll();
  }

  out.textContent = ``;

  const key = event.target.textContent;
  console.log(key);
});
