const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]
const guestInput = document.getElementById('input')
const listContainer = document.getElementById('guest-list')
const removeLast = document.getElementById('removeLast')

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

function displayGuests() {
    const initialGuests = ['Me', 'Cat']
    const listOfGuests = [...initialGuests, ...guests]
    const newList = listOfGuests.map( (item) => `<li>${item}</li>`
    )
    listContainer.innerHTML = newList.join('')
    return newList
}

// display guests on page load
displayGuests(guests)


 


function addGuest() {
    const listItem = document.createElement('li')
    let guest = input.value
    guest = guest.charAt(0).toUpperCase() + guest.slice(1);
    guestList.appendChild(listItem)
    listItem.innerHTML = guest
    input.value = ''
    listItem.addEventListener('click', (e) => {
        listItem.classList.add('remove')
    })

    listItem.addEventListener('click',() => {
        if(listItem.classList.contains('remove')) {
            listItem.addEventListener("click", () => {
                 guestList.removeChild(listItem); 
             });
         } 
    })
}

// handle enter button pressed on input 

guestInput.addEventListener('keyup', function(e) {
    e.preventDefault()
    if (e.key === 'Enter' || e.keyCode === 13) {
       addGuest()
       
       
    }
})

const guestListItems = document.querySelectorAll('li')


guestListItems.forEach(guest => {
    guest.addEventListener('click', () => {
        guest.classList.add('remove')
    })
    guest.addEventListener('click',() => {
        if(guest.classList.contains('remove')) {
            guest.addEventListener("click", () => {
                 guestList.removeChild(guest); 
             });
         } 
    })
    
});

