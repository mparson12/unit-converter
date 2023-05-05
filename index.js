/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert")
let inputEl = document.getElementById("value")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    volumeEl.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    massEl.textContent = `${baseValue} kilograms = ${baseValue * kiloToPound} pounds` 
})
