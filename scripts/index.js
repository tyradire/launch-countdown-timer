const days = document.querySelector('.timer__number-days');
const hours = document.querySelector('.timer__number-hours');
const minutes = document.querySelector('.timer__number-minutes');
const seconds = document.querySelector('.timer__number-seconds');

const countdown = () => {
  const countDate = new Date('September 13, 2022 00:00:00').getTime();
  const nowDate = new Date().getTime();
  const gap = countDate - nowDate;

  const s = 1000;
  const m = s * 60;
  const h = m * 60;
  const d = h * 24;

  const textDay = Math.floor(gap / d);
  const textHour = Math.floor((gap % d) /h);
  const textMinute = Math.floor((gap % h) /m);
  const textSecond = Math.floor((gap % m) /s);

  days.textContent = textDay < 10 ? '0' + textDay : textDay;
  hours.textContent = textHour < 10 ? '0' + textHour : textHour;
  minutes.textContent = textMinute < 10 ? '0' + textMinute : textMinute;
  seconds.textContent = textSecond < 10 ? '0' + textSecond : textSecond;
}

setInterval(countdown, 1000);