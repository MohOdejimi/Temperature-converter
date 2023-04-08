

/*Temperature Converter*/

let kelvin = document.querySelector('.kelvin').value
let fah = document.querySelector('.Fahrenheit').value
let rakine = document.querySelector('.Rakine').value

document.querySelector('.celsius-converter').addEventListener('click', celsiusConverter)
  
  function celsiusConverter () {
    let celsius = document.querySelector('.celsius').value
    let fah = (1.8*celsius) + 32
    let kev = Number((celsius)) + 273
    document.querySelector('.Fahrenheit').value =   fah
    document.querySelector('.kelvin').value = kev
  }
  
document.querySelector(".kelvin-converter").addEventListener('click', kelvinConverter);

function kelvinConverter() {
   let kelvin = document.querySelector('.kelvin').value
   let celsius = 273 - kelvin;
   let fahr = (1.8*kelvin) + 241
   document.querySelector('.Fahrenheit').value = fahr
   document.querySelector('.celsius').value = celsius
 }
 
 document.querySelector("#fahrenheit-converter").addEventListener('click', fahrenheitConverter);
 function fahrenheitConverter() {
   let fah = document.querySelector('#fahrenheit').value
   let centigrade = (fah-32) / 1.8
   let kelvin = (fah-241) / 1.8
   alert(`${fah}°F is equivalent to ${centigrade}°C`)
   alert(`${fah}°F is equivalent to ${kelvin}K`)
 }
 