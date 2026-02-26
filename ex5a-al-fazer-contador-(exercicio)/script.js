const button = document.querySelector('#button');
const num = document.querySelector('#number');
let value = 0

button.addEventListener('click', () => {
    value ++;
    number.textContent = `${value}`;
   

    if (value%2 == 0) {
        number.style.backgroundColor = 'green'
    } else {
           number.style.backgroundColor = 'red'
    }
})