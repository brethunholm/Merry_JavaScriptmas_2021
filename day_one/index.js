const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    // const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // let date = new Date();
    // let day = date.getDate()
    const christmas = new Date("Dec 25, 2021 00:00:00").getTime()
    let now = new Date().getTime()
    let timeLeft = christmas - now 

    let numOfDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24 ))
    let numOfHours =  Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let numOfMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let numOfSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    

  
    let hour = "hours" 
    if( numOfHours <= 1) {
        hour = "hour"
    }
    let day = "days"
    if( numOfDays <= 1) {
        day = "day"
    }
    let min = "minutes"
    if( numOfMinutes <= 1) {
        min = "minute"
    }
    let sec = "seconds"
    if( numOfSeconds <= 1) {
        sec = "Seconds"
    }


    // - Calculate remaining days.
    // let daysTillChristmas = christmas - day
    let daysTillChristmas= `${numOfDays} ${day} ${numOfHours} ${hour} ${numOfMinutes} ${min} and ${numOfSeconds} ${sec}`
 
    // - Display remaining days in countdownDisplay.
    countdownDisplay.textContent = daysTillChristmas


 

}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.

// - Add a countdown for another festival, your birthday, or Christmas 2022.