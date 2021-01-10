/* Cree una funcion que retorne el factorial de un numero 
factorial(n)
El factorial se define como: 4! = 4 x 3 x 2 x 1
por lo tanto factorial(4) = 24 */

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num = num * i;
    }
    return num;
  }
console.log(factorialize(4));