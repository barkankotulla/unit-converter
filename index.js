/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unit = document.getElementById("unit")
const button = document.getElementById("convert-button")
const length = document.getElementById("p-length")
const volume = document.getElementById("p-volume")
const mass = document.getElementById("p-mass")

button.addEventListener("click", function(){
    let solutionMetersToFeet = Number(unit.value * 3.281).toFixed(3)
    let solutionLitersToGallon = Number(unit.value * 0.264).toFixed(3)
    let solutionKilosToPound = Number(unit.value * 2.204).toFixed(3)
    
    let solutionFeetToMeters = Number(unit.value / 3.281).toFixed(3)
    let solutionGallonToLiters = Number(unit.value / 0.264).toFixed(3)
    let solutionPoundToKilos = Number(unit.value / 2.204).toFixed(3)
    
    length.innerText = `${unit.value} meters = ${solutionMetersToFeet} feet | ${unit.value} feet = ${solutionFeetToMeters} meters`
    
    volume.innerText = `${unit.value} liters = ${solutionLitersToGallon} gallon | ${unit.value} gallon = ${solutionGallonToLiters} liters`
    
    mass.innerText = `${unit.value} kilos = ${solutionKilosToPound} pound | ${unit.value} pound = ${solutionPoundToKilos} kilos`
})