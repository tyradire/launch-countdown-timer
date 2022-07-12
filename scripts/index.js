let countDate = new Date('September 13, 2022 00:00:00').getTime();

const containerDays = document.querySelector("[data-days]");
const containerHours = document.querySelector("[data-hours]");
const containerMinutes = document.querySelector("[data-minutes]");
const containerSeconds = document.querySelector("[data-seconds]");

const textTopDays = containerDays.querySelector('.flipcard__number_top');
const textTopHours = containerHours.querySelector('.flipcard__number_top');
const textTopMinutes = containerMinutes.querySelector('.flipcard__number_top');
const textTopSeconds = containerSeconds.querySelector('.flipcard__number_top');

const textCenterSeconds = containerSeconds.querySelector('.flipcard__number_center');

const textBottomDays = containerDays.querySelector('.flipcard__number_bottom');
const textBottomHours = containerHours.querySelector('.flipcard__number_bottom');
const textBottomMinutes = containerMinutes.querySelector('.flipcard__number_bottom');
const textBottomSeconds = containerSeconds.querySelector('.flipcard__number_bottom');

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

  flip(textTopDays, textBottomDays, days)
  flip(textTopHours, textBottomHours, hours)
  flip(textTopMinutes, textBottomMinutes, minutes)
  flip(textTopSeconds, textBottomSeconds, seconds)
}

function flip(flipCardTop, flipCardBottom, newNumber) {
  if (newNumber > 9) {
    flipCardTop.textContent = newNumber;
    flipCardBottom.textContent = newNumber;
    textCenterSeconds.textContent = newNumber;

  } else {
    flipCardTop.textContent = '0' + newNumber;
    flipCardBottom.textContent = '0' + newNumber;
    textCenterSeconds.textContent = '0' + newNumber;
  }
  
  // const topHalf = flipCard.querySelector(".flip-card__top")
  // const startNumber = parseInt(topHalf.textContent)
  // if (newNumber === startNumber) return

  // const bottomHalf = flipCard.querySelector(".flip-card__bottom")
  // const topFlip = document.createElement("div")
  // topFlip.classList.add("top-flip")
  // const bottomFlip = document.createElement("div")
  // bottomFlip.classList.add("bottom-flip")

  // top.textContent = startNumber
  // bottomHalf.textContent = startNumber
  // topFlip.textContent = startNumber
  // bottomFlip.textContent = newNumber

  // topFlip.addEventListener("animationstart", e => {
  //   topHalf.textContent = newNumber
  // })
  // topFlip.addEventListener("animationend", e => {
  //   topFlip.remove()
  // })
  // bottomFlip.addEventListener("animationend", e => {
  //   bottomHalf.textContent = newNumber
  //   bottomFlip.remove()
  // })
  // flipCard.append(topFlip, bottomFlip)
}