const speedometer = document.getElementById('speedometer');
const select = document.getElementById('select');
const time = document.getElementById('time');
let currentLocation = '';
let timeTaken = 0;

select.addEventListener('change', calculateSpeed);
time.addEventListener('change', calculateSpeed);

let destination = [
  {
    name: 'Munich',
    distanceFromPrevDestination: 2892,
  },
  {
    name: 'Kiev',
    distanceFromPrevDestination: 1111,
  },
  {
    name: 'Ulaanbaatar',
    distanceFromPrevDestination: 5324,
  },
  {
    name: 'Sydney',
    distanceFromPrevDestination: 5458,
  },
  {
    name: 'Tijuana',
    distanceFromPrevDestination: 6531,
  },
  {
    name: 'Chicago',
    distanceFromPrevDestination: 1729,
  },
];

function calculateSpeed() {
  let speed = 0;
  currentLocation = select.value;
  timeTaken = time.value;
  for (let index = 0; index < destination.length; index++) {
    if (currentLocation == destination[index].name)
      speed = Math.round(
        destination[index].distanceFromPrevDestination / timeTaken
      );
  }

  speedometer.innerHTML = `Average reindeer speed ${speed} 🦌`;
}
