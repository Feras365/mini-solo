let convInpt = document.getElementById("user-input")
let conBtn = document.getElementById("convert-btn")
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")
conBtn.addEventListener("click",function(){
    let intval = Number(convInpt.value)
    let metersToFeet = (intval * 3.28084).toFixed(3)
    let feetToMeters = (intval / 3.28084).toFixed(3)
    let litersToGallons = (intval * 0.264172).toFixed(3)
    let gallonsToLiters = (intval / 0.264172).toFixed(3)
    let kilosToPounds = (intval * 2.20462).toFixed(3)
    let poundsToKilos = (intval / 2.20462).toFixed(3)
    lengthResult.textContent =
        `${intval} meters = ${metersToFeet} feet | ${intval} feet = ${feetToMeters} meters`

    volumeResult.textContent =
        `${intval} liters = ${litersToGallons} gallons | ${intval} gallons = ${gallonsToLiters} liters`

    massResult.textContent =
        `${intval} kilos = ${kilosToPounds} pounds | ${intval} pounds = ${poundsToKilos} kilos`
    convInpt.value=""  
    
    
})

