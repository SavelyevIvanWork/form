let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('.input');
let button = document.querySelector('.button');

function createNewElement() {
    let inputArr = document.querySelectorAll('.input');
    if (inputArr.length < 6) {
        let inputNew = document.createElement('input');
            inputNew.classList.add('input');
        if (inputArr.length % 2 !== 0) {
            inputNew.classList.add('input--even');
        }
        console.log(wrapper.lastElementChild.value);
        if (wrapper.lastElementChild.value === '555') {
            inputNew.value = '---';
        }
        wrapper.appendChild(inputNew);
    }
} 

function buttonClickHandler(event) {
    event.preventDefault()
    createNewElement()
}

button.addEventListener('click', buttonClickHandler);
