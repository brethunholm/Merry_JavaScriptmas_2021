const btn = document.getElementById('btn');
let timer = document.getElementById('timer');
let affirmation = document.getElementById('affirmation');
let timeout;
let time = 900;

btn.addEventListener('click', () => {
  if (btn.disabled) {
    return;
  }
  timeout = setInterval(bustStress, 1000);
  btn.disabled = true;
});

const bustStress = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;
  timer.innerHTML = `${minutes}:${seconds}`;
  time--;

  if (time < 0) {
    clearTimeout(timeout);
    btn.disabled = false;
  }
};
