let a = ""; //первое число
let b = ""; //второе чилос
let sign = ""; //знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

// Экран

const out = document.querySelector(`.calc-screen p`);

function clearAll() {
  a = ``;
  b = ``;
  sign = ``;
  finish = false;
  out.textContent = 0;
}
// document.querySelector(`.ac`).onclick = clearAll;
document.querySelector(`.buttons`).addEventListener = (event) => {
  // Нажата не кнопка
  if (!event.target.classList.contains(`btn`)) return;
  // Нажата кнопка очистить
  if (event.target.classList.contains(`ac`)) return;

  out.textContent = ``;

  const key = event.target.textContent;
  console.log(key);
};
