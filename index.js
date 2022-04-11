//Initialize
let num1 = 100
let metersToFeet = 0
let feetToMeters = 0
let litersToGallons = 0
let gallonsToLiters = 0
let kilosToPounds = 0
let poundsToKilos = 0
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
document.getElementById("num1-el").textContent = num1
//num1 = document.getElementById("num1-el"); 

//Calculation conversions
lengthCalc()
volumeCalc()
massCalc()

//Display calculations
lengthEl.textContent = num1 + " meters = " + metersToFeet.toFixed(3) + " feet | " + num1 + " feet = " + feetToMeters.toFixed(3) + " meters" 
volumeEl.textContent = num1 + " liters = " + litersToGallons.toFixed(3) + " gallons | " + num1 + " gallons = " + gallonsToLiters.toFixed(3) + " liters" 
massEl.textContent = num1 + " kilos = " + kilosToPounds.toFixed(3) + " pounds | " + num1 + " pounds = " + poundsToKilos.toFixed(3) + " kilos" 

//Functions
function lengthCalc(){
    //1 meter = 3.28084 feet, 1 foot = 0.3048 meter
    metersToFeet = num1 * 3.28084
    feetToMeters = num1 * .3048
    
}
function volumeCalc(){
    //1 liter = 0.264172 gallon, 1 gallon = 3.78541103373138 liters
    litersToGallons = num1 * .26417
    gallonsToLiters = num1 * 3.78541
}
function massCalc(){
    //1 kilo = 2.20462 pounds, 1 pound = 0.453591830542594 kilo
    kilosToPounds = num1 * 2.20462
    poundsToKilos = num1 * 0.45359
}