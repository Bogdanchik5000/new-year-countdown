import "./style.scss";

const year = document.querySelector("h3");
const nowDate = new Date();
const newYerDate = new Date("01.01.2024");
const nowYear = nowDate.getFullYear();
const day = document.querySelectorAll("#day span");
const hour = document.querySelectorAll("#hour span");
const minute = document.querySelectorAll("#minute span");
const second = document.querySelectorAll("#second span");

year.textContent = `Осталось до ${nowYear + 1} года:`;

// Установить разницу времени
function setTimeDiff() {
  const nowDate = new Date();
  const diff = newYerDate - nowDate;
  const dayDiff = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hourDiff = Math.floor(diff / 1000 / 60 / 60);
  const minDiff = Math.floor(diff / 1000 / 60);
  const secDiff = Math.floor(diff / 1000);
  day[0].textContent = dayDiff;
  hour[0].textContent = hourDiff - dayDiff * 24;
  minute[0].textContent = minDiff - hourDiff * 60;
  second[0].textContent = secDiff - minDiff * 60;
}

setTimeDiff();
setInterval(setTimeDiff, 1000);
