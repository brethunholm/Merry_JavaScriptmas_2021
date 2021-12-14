const elf = document.getElementById('elf');
const btn = document.getElementById('btn');
const elfZone = document.getElementById('elf-hangout-zone');

btn.addEventListener('click', duplicateElf);

function duplicateElf() {
  elf.textContent += '🧝';
}
