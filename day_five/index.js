const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
btn.addEventListener("click", displayGreeting)
const card = document.querySelector('.card')

toInput = document.getElementById('toInput')
fromInput = document.getElementById('fromInput')
toDisplay = document.getElementById('toDisplay')
fromDisplay= document.getElementById('fromDisplay')
customMessage = document.getElementById('messageInput')

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]


 function getRandomGreeting() {
    let randGreeting = greetings[Math.floor(Math.random() * greetings.length )]
    console.log(randGreeting);
    return randGreeting
 }

function displayGreeting() {
let randGreeting = getRandomGreeting()
card.innerHTML = `
<p>${toInput.value ?  `To ${toInput.value},` : 'Greetings,'}</p>
<p>${customMessage.value ? customMessage.value : randGreeting}</p>
<p>${fromInput.value ? `Love, ${fromInput.value}` : 'with cheer, your friend'}</p>
`

}




// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.