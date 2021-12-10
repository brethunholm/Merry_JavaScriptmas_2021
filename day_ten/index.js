const meter = document.getElementById("meter")
const christmas = new Date('December 25, 2021 00:00:00')
let now = new Date()
const message = document.getElementById('message')
// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.


function loading() {
    let day = now.getDate()
    meter.value = day
 
    if (day === 25) {
        message.innerHTML= "Woohoo Merry Christmas 🎅"
    }
}

loading()