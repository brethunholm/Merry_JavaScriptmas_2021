const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)
const decorationContainer = document.getElementById('decoration-container')
const message = document.getElementById('message')
const snowman = document.createElement('span')

// additional decorations
const moreDeco = document.getElementById('more-decoration-container')
const star = document.getElementById('star')
const santa = document.getElementById('santa')
const confetti = document.getElementById('confetti')


const present = document.createElement('span')


function deckTheHalls() {
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
   if(decorator.checked) {
       decorate()
       message.innerHTML = ''
       moreDeco.style.display ='block'
   } else {
      while(decorationContainer.firstChild) {
        decorationContainer.removeChild(decorationContainer.lastChild)
      }
      let replaceHouse = document.createElement('span')
      replaceHouse.innerHTML = '🏡'
      decorationContainer.appendChild(replaceHouse)
      message.innerHTML = 'Flip the switch to add decorations!'
      moreDeco.style.display ='none'

   }


}


function decorate() {
    const tree = document.createElement('span')
    const present = document.createElement('span')
    present.innerHTML = '🎁'
    tree.innerHTML = '🎄'
    decorationContainer.append(tree)
    decorationContainer.prepend(present)
}

// Add addtional decorations

function addStar() {
    decorationContainer.textContent += '🌟'
}

function addSanta() {
    decorationContainer.textContent += '🎅'
}

function addConfetti() {
    decorationContainer.textContent += '🎉'
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
