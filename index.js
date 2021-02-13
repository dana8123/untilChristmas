
// You're gonna need this
function getTime() {
  // Don't delete this.
  const time = document.querySelector("h3");
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  let toDay = new Date();
  let untilDate = xmasDay - toDay;
  let day = Math.floor(untilDate / (24 * 1000 * 60 * 60) % 365);
  let hours = Math.floor((untilDate / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((untilDate / (1000 * 60)) % 60);
  let seconds = Math.floor((untilDate / 1000) % 60);
  time.innerText = `${day} : ${hours} : ${minutes} : ${seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
