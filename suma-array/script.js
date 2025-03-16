/** 
 * La suma de dos números consecutivos de un array debe ser 8
 * [1, 3, 6, 9]
 * [2, 6, 4, 1]
 */
console.log("La suma de dos números consecutivos de un array debe ser 8");

const suma = (array) => {
  for (let i = 0; i < array.length; i++) {
    if ((array[i] + array[i + 1]) === 8) {
      return true;
    }
  }
  return false;
}

console.log(suma([1, 3, 6, 9]))
console.log(suma([2, 6, 4, 1]))
console.log(suma([5, 2, 4, 4]))

console.log("----------------------")


/** 
 * La suma de dos números de un array debe ser 8
 * [1, 3, 6, 9]
 * [2, 4, 4, 1]
 */
console.log("La suma de dos números de un array debe ser 8");

const sumaArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    const num = i + 1;

    for (let j = num; j < array.length; j++) {
      if (array[i] + array[j] === 8) return true;
    }
  }
  return false;
}

console.log(sumaArray([1, 3, 6, 9]))
console.log(sumaArray([2, 4, 4, 1]))
console.log(sumaArray([5, 2, 4, 4]))

console.log("----------------------")