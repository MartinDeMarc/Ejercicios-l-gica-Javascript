// Ejercicio 1: Contar instancias de un carácter en una cadena
// - Cree una función que tome dos cadenas como argumentos y devuelva el
// número de veces que la primera cadena (el carácter único) se encuentra en la
// segunda cadena.
// Ejemplo:
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4
// Notas: Su salida debe distinguir entre mayúsculas y minúsculas (vea el segundo
// ejemplo).

function cuantasVecesSeRepite(cadena, caracter) {
  let indices = [];
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i].toLowerCase() === caracter) indices.push(i);
  }
  return `Las veces que se repite es: ${indices.length}`;
}

console.log(cuantasVecesSeRepite("holaaas", "a"));
console.log(cuantasVecesSeRepite("hoolamundoo", "o"));

// Ejercicio 2: Encuentra los números más pequeños y más grandes
// - Cree una función que tome una matriz de números y devuelva los números
// mínimo y máximo, en ese orden.
// Ejemplo:
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
// Notas: Todos los arrays de prueba tendrán al menos un elemento y son válidas.

function mayorMenor(arr) {
  let menor = arr[0];
  let mayor = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (menor > arr[i]) {
      menor = arr[i];
    }
    if (mayor < arr[i]) {
      mayor = arr[i];
    }
  }
  return [menor, mayor];
}

console.log(mayorMenor([52, 20, 30, 4, 10, 2, 7, 2]));

// Ejercicio 3: Dígito más alto
// - Cree una función que tome un número como argumento y devuelva el dígito
// más alto de ese número.
// Ejemplo:
// highestDigit(512) => 5

function extraerDigitoMayor(numero) {
  if (typeof numero === "number" && Number.isInteger(numero)) {
    let digitos = String(numero)
      .split("")
      .map((c) => parseInt(c));

    let digitoMayor = digitos[0];

    digitos.forEach((d) => (digitoMayor = Math.max(digitoMayor, d)));

    return digitoMayor;
  } else {
    ("debe ser un número entero.");
  }
}

console.log(extraerDigitoMayor(3657594));

// Ejercicio 4: Ordenar números en orden descendente
// - Cree una función que tome cualquier número no negativo como argumento y
// lo devuelva con sus dígitos en orden descendente. El orden descendente es
// cuando ordenas de mayor a menor.
// Ejemplo:
// sortDescending(123) ➞ 321
// sortDescending(1254859723) ➞ 9875543221
// sortDescending(73065) ➞ 76530

function ejercicio4(n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => a - b)
      .reverse()
      .join("")
  );
}

console.log(ejercicio4(123456));

// Ejercicio 5: Código postal válido
// - Los códigos postales constan de 4 dígitos consecutivos. Dada una cadena,
// escriba una función para determinar si la entrada es un código postal válido. Un
// código postal válido es el siguiente:
// ● Solo debe contener números (no se permiten caracteres que no sean
// dígitos).
// ● No debe contener ningún espacio.
// ● No debe tener más de 5 dígitos de longitud.
// Ejemplo:
// isValid("1714") ➞ true
// isValid("12424") ➞ false
// isValid("732 2") ➞ false
// isValid("A323") ➞ false

function postal(cpostal) {
  let cont = 0;
  if (cpostal.length == 4 && cpostal <= 5999 && cpostal >= 5000) {
    return true;
  } else {
    cpostal.charAt(cont) == " ";
    return false;
  }
}

console.log(postal(5220));

// Ejercicio 6: Convertidor de temperatura
// - Crea una función que convierta Celsius a Fahrenheit y viceversa.
// Ejemplo:
// convert("35°C") ➞ "95°F"
// convert("19°F") ➞ "-7°C"
// convert("33") ➞ "Error"
// Notas:
// ● Redondea al entero más cercano.
// ● Si la entrada es incorrecta, devuelve "Error".

function celsiusAFahrenheit(celsius) {
  let resultado = (celsius * 9) / 5.0 + 32;

  return resultado;
}

function fahrenheitACelsius(fahrenheit) {
  let resultado = ((fahrenheit - 32) * 5) / 9.0;

  return resultado;
}

let celsius = 29;
let resultado = celsiusAFahrenheit(celsius);
console.log(`${celsius}°C = ${resultado}°F`);

console.log();

let fahrenheit = resultado;
resultado = fahrenheitACelsius(fahrenheit);
console.log(`${fahrenheit}°F = ${resultado}°C`);

// Ejercicios 7: ¿Cuántos días hasta ...?
// - Dado un date, devuelve cuántos días faltan para esa fecha. El date estará en
// formato mm/dd/aaaa .
// Ejemplo:
// daysUntil("10/16/2022") ➞ "3 dias"
// daysUntil("10/20/2020") ➞ "7 dias"

//final: array {dia, mes,año}

// JavaScript program to illustrate
// calculation of no. of days between two date

// To set two dates to two variables
let fecha1 = new Date("10/27/2022");
let fecha2 = new Date("11/20/2022");

// To calculate the time difference of two dates
let Difference_In_Time = fecha2.getTime() - fecha1.getTime();

// To calculate the no. of days between two dates
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
document.write(
  "Total de dias que faltan para el mundial  <br>" +
    fecha1 +
    "<br> y <br>" +
    fecha2 +
    " es: <br> " +
    Difference_In_Days
);

// ``Ejercicios 8: Reemplazar vocal con otro carácter``
// - Cree una función que tome una cadena y reemplace las vocales con otro
// carácter.
// ● A/a = 1
// ● E/e = 2
// ● I/i = 3
// ● O/o = 4
// ● U/u = 5
// Ejemplo:
// replaceVowel("karachi") ➞ "k1r1ch3"
// replaceVowel("chembur") ➞ "ch2mb5r"
// replaceVowel("khandbari") ➞ "kh1ndb1r3"
// Notas: La entrada puede estar en mayúsculas

let str = "Esto es una prueba de texto.";
let mapObj = {
  a: "1",
  e: "2",
  i: "3",
  o: "4",
  u: "5",
};
str = str.replace(/a|e|i|o|u/g, function (matched) {
  return mapObj[matched];
});

console.log(str);

// Ejercicio 9: Devuelve la suma de los dos números más pequeños
// - Cree una función que tome un array de números y devuelva la suma de los dos
// números positivos más bajos.
// Ejemplos:
// sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7
// sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞
// 3453455
// sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8
// sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞
// 563
// sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
// Nota: No cuentes los números negativos.

// Ejercicio 10: Calculadora básica
// - Cree una función que tome dos números y un operador matemático + - / *y
// realice un cálculo con los números dados.
// Ejemplo:
// calculator(2, "+", 2) ➞ 4
// calculator(2, "*", 2) ➞ 4
// calculator(4, "/", 2) ➞ 2
// Notas: Tener en cuenta los posibles errores

const calculadora = (operacion, ...numeros) => {
  const legend = "+-*/";
  const ind = legend.indexOf(operacion);
  return numeros.reduce((acc, val) => {
    switch (operacion) {
      case "+":
        return acc + val;
      case "-":
        return acc - val;
      case "*":
        return acc * val;
      case "/":
        return acc / val;
    }
  });
};
console.log(calculadora("+", 4, 6));
console.log(calculadora("-", 89, 45));
console.log(calculadora("*", 81, 13));
console.log(calculadora("/", 189000, 45));
