const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
const container = document.querySelector('.container')
christmassifierBtn.addEventListener("click", christmassifyName)
let song = new Audio('./audio/christmas.mp3')



function christmassifyName() {
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
    container.classList.toggle('christmassified')
   if(container.classList.contains('christmassified')) {
    christmassifierBtn.innerHTML = "De-christmassify"
    song.play()
   } else {
       christmassifierBtn.innerHTML ='Christmassify'
       song.pause()
       song.currentTime = 0
   }
   

}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.

