let countDate = new Date('January 01, 2023 00:00:00').getTime();

const containerDays = document.querySelector("[data-days]");
const containerHours = document.querySelector("[data-hours]");
const containerMinutes = document.querySelector("[data-minutes]");
const containerSeconds = document.querySelector("[data-seconds]");

const flipMinutes = document.getElementById('minutes');
const flipHours = document.getElementById('hours');
const flipDays = document.getElementById('days');

const textTopDays = containerDays.querySelector('.flip-card__number_top');
const textTopHours = containerHours.querySelector('.flip-card__number_top');
const textTopMinutes = containerMinutes.querySelector('.flip-card__number_top');
const textTopSeconds = containerSeconds.querySelector('.flip-card__number_top');

const textBottomDays = containerDays.querySelector('.flip-card__number_bottom');
const textBottomHours = containerHours.querySelector('.flip-card__number_bottom');
const textBottomMinutes = containerMinutes.querySelector('.flip-card__number_bottom');
const textBottomSeconds = containerSeconds.querySelector('.flip-card__number_bottom');

setInterval(flipAllCards, 1000)

function flipAllCards() {

  const nowDate = new Date();
  const gap = countDate - nowDate;

  const s = 1000;
  const m = s * 60;
  const h = m * 60;
  const d = h * 24;

  const days = Math.floor(gap / d)
  const hours = Math.floor((gap % d) /h)
  const minutes = Math.floor((gap % h) /m)
  const seconds = Math.floor((gap % m) /s)

  flip(textTopDays, textBottomDays, flipDays,  days)
  flip(textTopHours, textBottomHours, flipHours, hours)
  flip(textTopMinutes, textBottomMinutes, flipMinutes, minutes)
  flipSeconds(textTopSeconds, textBottomSeconds, seconds)
}

function addAnimation(top, bottom) {
  top.classList.add('animation');
  bottom.classList.add('animation');
}

function removeAnimation(top, bottom) {
  top.classList.remove('animation');
  bottom.classList.remove('animation');
}

function flip(flipCardTop, flipCardBottom, flipUnit, newNumber) {

  const startNumber = parseInt(flipCardTop.textContent)
  if (newNumber === startNumber) {
    removeAnimation(flipCardTop, flipCardBottom);
    flipUnit.classList.remove('flip-card__animation_display');
    return
  };
  if (newNumber > 9) {
    flipCardTop.textContent = newNumber;
    flipCardBottom.textContent = newNumber;

  } else {
    flipCardTop.textContent = '0' + newNumber;
    flipCardBottom.textContent = '0' + newNumber;
  }
  addAnimation(flipCardTop, flipCardBottom);
  flipUnit.classList.add('flip-card__animation_display');
}

function flipSeconds(flipCardTop, flipCardBottom, newNumber) {
  if (newNumber > 9) {
    flipCardTop.textContent = newNumber;
    flipCardBottom.textContent = newNumber;

  } else {
    flipCardTop.textContent = '0' + newNumber;
    flipCardBottom.textContent = '0' + newNumber;
  }
  addAnimation(flipCardTop, flipCardBottom);
}
