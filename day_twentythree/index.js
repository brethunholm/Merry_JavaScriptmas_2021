const santaSign = document.getElementById('sign');
const input = document.getElementById('text-input');

const writeSign = (e) => {
  santaSign.innerHTML = `🎅 ${e.target.value} 🎄`;
};

input.addEventListener('keyup', writeSign);
