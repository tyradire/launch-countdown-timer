const hours = document.querySelector('.timer__hours');
const minutes = document.querySelector('.timer__minutes');
const seconds = document.querySelector('.timer__seconds');

const time = {
  d: 0,
  h: 0,
  m: 0,
  s: 0
}

let timer;

const init = () => {
  timer = new Date();
}

init();

console.log(timer)