const counterText = document.querySelector ('.counter-warp b')
const counterBtn = document.querySelectorAll( '.counter-warp button')
let counter = 1;

counterBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === 0) {
            counter=counter -1;
        } else if (index === 1) { 
            counter=counter +1;
        }
        counterText.textContent = counter;
    })
})