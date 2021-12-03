const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.



function handleToggle(id) {
    if( id === "christmas") {
        body.classList.remove('snow')
        body.classList.add("christmas")
        greeting.innerHTML = "Ho Ho Ho Merry Christmas!🎅🎄"
    } else {
        body.classList.remove('christmas')
        body.classList.add("snow")
        greeting.innerHTML = "Do you want to build a snowman? ⛄️"
    }

   
}






// Stretch goals:
// - Add more themes!
// - Allow the user to customize the themes.
// - Turn the radio buttons into a toggle switch.