let countDate = new Date('September 13, 2022 00:00:00').getTime();

setInterval(flipAllCards, 250)

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

  flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10))
  flip(document.querySelector("[data-days-ones]"), days % 10)
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".flip-card__top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".flip-card__bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}