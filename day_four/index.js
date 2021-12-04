
const addButton = document.getElementById('addItem')
const toDoContainer = document.getElementById('toDoContainer')
const input = document.getElementById('listInput')


function handleToDo() {
    const todo = document.createElement('li')
    toDoContainer.appendChild(todo)
    todo.classList.add('christmasList')
    todo.innerHTML=listInput.value
    todo.addEventListener('click', function(){
        todo.classList.add('completed')
    })
  
    todo.addEventListener('click',() => {
        if(todo.classList.contains('completed')) {
            console.log('complete');
             todo.addEventListener("click", () => {
                 toDoContainer.removeChild(todo);
                 loadConfettiPreset(tsParticles);
                 tsParticles.load("tsparticles", {
                 preset: "confetti",
                 });
                 
             });
         } 
    })
    
        input.value = ''
}


input.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
       handleToDo()
       
    }
})
