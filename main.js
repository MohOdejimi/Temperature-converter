/*Temperature Converter*/


document.querySelector('.celsius-converter').addEventListener('click', celsiusConverter)
  
  function celsiusConverter () {
    let celsius = document.querySelector('.celsius').value
    let fah = (1.8*celsius) + 32
    let kev = Number((celsius)) + 273
    let rak = (celsius * (9/5)) + 491.67
    document.querySelector('.Fahrenheit').value =   `${fah}°F`
    document.querySelector('.kelvin').value = `${kev}K`
    document.querySelector('.Rakine').value = `${rak}°R`
  }
  
document.querySelector(".kelvin-converter").addEventListener('click', kelvinConverter);

function kelvinConverter() {
   let kelvin = document.querySelector('.kelvin').value
   let celsius = 273 - kelvin;
   let fahr = (1.8*kelvin) + 241
   let rak = 1.8 * kelvin
   document.querySelector('.Fahrenheit').value = `${fahr}°F`
   document.querySelector('.celsius').value = `${celsius}°C`
   document.querySelector('.Rakine').value = `${rak}°R`
 }
 document.querySelector(".fah-converter").addEventListener('click', fahrenheitConverter);
 
 function fahrenheitConverter() {
   let fah = document.querySelector('.Fahrenheit').value
   let celsius = (fah-32) / 1.8
   let kelvin = (fah-241) / 1.8
   let rak = Number(fah) + 459.67
   document.querySelector('.kelvin').value = `${kelvin}K`
   document.querySelector('.celsius').value  = `${celsius}°C`
   document.querySelector('.Rakine').value = `${rak}°R`
 }
 document.querySelector(".rakine-converter").addEventListener('click', rankineConverter);
 
 function rankineConverter() {
   let rak = document.querySelector('.Rakine').value
   let celsius = (rak - 491.67) / 1.8
   let kelvin = rak / 1.8
   let fah = rak - 459.67
   document.querySelector('.kelvin').value = `${kelvin}K`
   document.querySelector('.celsius').value = `${celsius}°C`
   document.querySelector('.Fahrenheit').value = `${fah}°F`
 }
 
document.querySelector('.reset').addEventListener('click', resetFn)
function resetFn () {
  document.querySelector('.kelvin').value = ''
  document.querySelector('.celsius').value = ''
  document.querySelector('.Rakine').value = ''
  document.querySelector('.Fahrenheit').value = ''
}
 