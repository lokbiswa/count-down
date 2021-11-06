/*
Get date
convert to total hours 
count down to the hour
*/
const countDowndate = new Date("Nov 6, 2021 17:00").getTime();

function calculate(timeLeft) {
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) + 1;
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return [hours, minutes, seconds];
}
function updateDisplay(time) {
  let [hours, minutes, seconds] = time;
  document.querySelector("#hour-value").innerHTML = hours;
  document.querySelector("#min-value").innerHTML = minutes;
  document.querySelector("#sec-value").innerHTML = seconds;
}
const countDown = setInterval(() => {
  let currentTime = Date.now();
  let timeLeft = countDowndate - currentTime;
  let time = calculate(timeLeft);
  updateDisplay(time);
}, 1000);
