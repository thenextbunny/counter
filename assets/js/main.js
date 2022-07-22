const currentNumberWrapper = document.querySelector("#currentNumber");
let currentNumber = 0;

const increment = document.querySelector("#increment");

increment.addEventListener("click", function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
})

const decrement = document.querySelector("#decrement");

decrement.addEventListener("click", function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
})

const reset = document.querySelector("#reset");

reset.addEventListener("click", function reset () {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
})