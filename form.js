let form = document.querySelector('.form');
let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('.input');
let button = document.querySelector('.button');

function createNewElement() {
    let inputArr = document.querySelectorAll('.input');
    if (inputArr.length < 6) {
        let inputNew = document.createElement('input');
            
        if (inputArr.length % 2 === 0) {
            inputNew.classList.add('input--even');
        }
            inputNew.classList.add('input');
            inputNew.placeholder = input.placeholder;
            wrapper.appendChild(inputNew);
    } 
}

function buttonClickHandler(event) {
    event.preventDefault()
    createNewElement()
}

button.addEventListener('click', buttonClickHandler);

