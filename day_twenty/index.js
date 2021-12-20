const inputs = document.querySelectorAll('.controls input');
const eyes = document.querySelectorAll('.eye');
const nose = document.querySelector('.nose');
const buttons = document.querySelectorAll('.button');
const hat = document.getElementById('hat');
const hatButton = document.getElementById('hat-button');

hatButton.addEventListener('click', () => {
  hat.innerText = '🎩';
});

inputs.forEach((input) => input.addEventListener('change', handleChange));

function handleChange(event) {
  const { id, value } = event.target;
  if (id === 'color') {
    updateColor(eyes, value);
  } else if (id === 'color3') {
    updateColor(nose, value);
  } else if (id === 'color2') {
    updateColor(buttons, value);
  }
}

const updateColor = (itemsToUpdate, updatedValue) => {
  if (itemsToUpdate === nose) {
    itemsToUpdate.style.borderColor = `transparent transparent transparent ${updatedValue}`;
  } else {
    itemsToUpdate.forEach(
      (item) => (item.style.backgroundColor = updatedValue)
    );
  }
};

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.
