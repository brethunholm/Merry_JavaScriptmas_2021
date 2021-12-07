const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const volumeUpBtn = document.getElementById('volumeUp')
const volumeDownBtn = document.getElementById('volumeDown')
const jingle = new Audio('./audio/jingle-bells.mp3')
const wish = new Audio('./audio/we-wish-you-a-merry-christmas.mp3')
const gentlemen = new Audio('./audio/god-rest-ye-merry-gentlemen.mp3')
const songSelect = document.getElementById('songSelect')
let songValue = 'jingle'
let song = jingle

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.

function handleSelect() {
    song.pause()
    songValue = songSelect.options[songSelect.selectedIndex].value
    return song
}


playBtn.addEventListener('click', () => {
    if(songValue === 'jingle') {
        song = jingle
       jingle.play()
    } else if(songValue === 'wish') {
        song = wish
        wish.play()
    } else if(songValue = 'gentlemen') {
        song = gentlemen
        gentlemen.play()
    }
    song.volume = 0.3
})

pauseBtn.addEventListener('click', () => {
    song.pause()
})

stopBtn.addEventListener('click', () => {
    song.pause()
    song.currentTime = 0
})

volumeUpBtn.addEventListener('click', () => {
    if(song.volume < 1) {
        song.volume = song.volume + .1
        console.log('volume increased');
    }
})

volumeDownBtn.addEventListener('click', () => {
    if(song.volume <= 1) {
        song.volume = song.volume - .1
        console.log('volume decreased');
    }
})