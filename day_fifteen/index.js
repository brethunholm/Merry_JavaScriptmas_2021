const languageSelector = document.getElementById('language-selector');
const greetingDisplay = document.getElementById('greeting-text');
languageSelector.addEventListener('change', translate);

const greetingsArr = [
  {
    language: 'English',
    greeting: 'Merry Christmas!',
  },
  {
    language: 'Spanish',
    greeting: 'Feliz Navidad!',
  },
  {
    language: 'Ukrainian',
    greeting: 'щасливого Різдва!',
  },
  {
    language: 'Welsh',
    greeting: 'Nadolig Llawen!',
  },
];

function translate() {
  // Task:
  // - Write a function to display the correct greeting when a language is selected.
  if (languageSelector.value === 'English') {
    greetingDisplay.innerHTML = greetingsArr[0].greeting.toString();
  } else if (languageSelector.value === 'Spanish') {
    greetingDisplay.innerHTML = greetingsArr[1].greeting.toString();
  } else if (languageSelector.value === 'Ukrainian') {
    greetingDisplay.innerHTML = greetingsArr[2].greeting.toString();
  } else if (languageSelector.value === 'Welsh') {
    greetingDisplay.innerHTML = greetingsArr[3].greeting.toString();
  }
}
