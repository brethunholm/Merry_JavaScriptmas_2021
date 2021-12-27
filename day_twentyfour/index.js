const crew = document.getElementById('crew');
const btn = document.getElementById('btn');

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.

const launchSleigh = () => {
  crew.classList.add('slide-out-elliptic-top-bck');
};

btn.addEventListener('click', launchSleigh);
