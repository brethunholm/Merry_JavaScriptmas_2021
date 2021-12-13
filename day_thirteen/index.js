const btn = document.getElementById("btn")
let food = document.getElementById("food")
const calculateBtn = document.getElementById('btn')
const guestCount = document.getElementById('num-input')
const isVegetarian = document.getElementById('vegetarian-input')
const recipe = document.getElementById('recipe')


guestCount.addEventListener('change', updateValue)

function updateValue(e) {
    guestCount.value = e.target.value
}





// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

const dinnerDisplay = () => {
    if(guestCount.value === "0" || !guestCount.value || guestCount.value < 0) {
        alert('Please enter guest count for calculation')
    }
    else if(isVegetarian.checked) {
        food.innerHTML = 'Tofurkey!'
        recipe.innerHTML = 'Recipe: Preheat oven to 375. Bake Tofurkey for 45 min. Serve with vegetables.'
    }
    else if(guestCount.value > 4) {
        food.innerHTML = 'Turkey'
        recipe.innerHTML = 'Recipe: Bake turkey at 400 for 4 hours serve with gravy and stuffing'
    } else if(guestCount.value <= 4) {
        food.innerHTML = 'Pizza'
        recipe.innerHTML = 'Recipe: 1. Dial 1-800-PIZZA 2. Order Pizza '
    }

}

calculateBtn.addEventListener('click', dinnerDisplay)