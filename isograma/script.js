/** Un isograma es una palabra que no tiene letras repetidas. Consideraciones adicionales:
 *  
 * Un string vacío es un isograma. OK
 * La función tiene que ser (case insensitive) e ignorar acentos. 
 * Si el string tiene más de una palabra retornar false. OK
 * Se tiene que hacer clean up del string antes de comparar. OK
 * 
 * Ejemplo:
 * "Murciélago"
 * "reto"
 * "casa"
 * "PeRro"
 * "GaTo" 
 */

const regex = /[áéíóú]/gi;

const esIsograma = (palabra) => {

  if (palabra.trim().split(" ").length >= 2) return false;

  const array = palabra.trim().toLowerCase().split("");
  let letra = [];

  for (let i = 0; i < array.length; i++) {

    if (letra.includes(array[i])) return false;

    letra.push(array[i]);
  }

  return true;
}

console.log("casá", esIsograma("casá"))
console.log("casa de pedro", esIsograma("casa de pedro"))
console.log("Murciélago", esIsograma("Murciélago"))
console.log("reto", esIsograma("reto"))
console.log("casa", esIsograma("casa"))
console.log("PeRro", esIsograma("PeRro"))
console.log("GaTo", esIsograma("GaTo"))