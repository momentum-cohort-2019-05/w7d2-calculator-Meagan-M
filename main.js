const display = document.querySelector('#display')
let total = 0;
const oneButton = document.querySelector('#one')
const twoButton = document.querySelector('#two')
const threeButton = document.querySelector('#three')
const fourButton = document.querySelector('#four')
const fiveButton = document.querySelector('#five')
const sixButton =  document.querySelector('#six')
const sevenButton = document.querySelector('#seven')
const eightButton = document.querySelector('#eight')


oneButton.addEventListener('click', function () {
    display.value += oneButton.value
    // display.value = display.value + oneButton.value
})

twoButton.addEventListener('click', function () {
    display.value += twoButton.value
})

threeButton.addEventListener('click', function () {
    display.value += threeButton.value
})

fourButton.addEventListener('click', function () {
    display.value += fourButton.value
})

fiveButton.addEventListener('click', function () {
    display.value += fiveButton.value
})

sixButton.addEventListener('click', function () {
    display.value += sixButton.value
})

sevenButton.addEventListener('click', function () {
    display.value += sevenButton.value
})

eightButton.addEventListener('click', function () {
    display.value += eightButton.value
})

const nineButton = document.querySelector('#nine')
nineButton.addEventListener('click', function () {
    display.value += nineButton.value
})