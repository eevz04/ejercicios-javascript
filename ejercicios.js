const sales = [
  { item: "reloj", quantity: 2, price: 100 },
  { item: "lapto", quantity: 4, price: 950 },
  { item: "shampoo", quantity: 3, price: 10 },
];

function calculateTotalSales(sales) {
  let total = 0;
  for (let i = 0; i < sales.length; i++) {
    total += sales[i].quantity * sales[i].price;
  }

  return total;
}

console.log(calculateTotalSales(sales));

// Ejercicio 2

const orders = [
  { item: "cuaderno", quantity: 2, price: 10 },
  { item: "celular", quantity: 3, price: 500 },
  { item: "audifonos", quantity: 1, price: 150 },
];

function generateReceipt(orders) {
  let grandTotal = 0; // aquí acumularemos el total general

  for (let i = 0; i < orders.length; i++) {
    let itemTotal = orders[i].quantity * orders[i].price;

    grandTotal += itemTotal; // acumulamos el total general

    console.log(
      `Artículo: ${orders[i].item}, Cantidad: ${orders[i].quantity}, Precio Unitario: ${orders[i].price}, Total: ${itemTotal}`,
    );
  }

  // aquí imprimiremos el total general
  console.log(`Total General: ${grandTotal}`);
}

// ✅ Llamamos a la función para que se ejecute
generateReceipt(orders);

// Ejercicio 3

const passwords = [
  "abc12345", // válida: 8 caracteres alfanuméricos
  "password!", // inválida: contiene símbolo "!"
  "User2023", // válida: solo letras y números
  "short", // inválida: menos de 8 caracteres
  "thisisaverylongpassword123", // inválida: más de 20 caracteres
];

function validatePasswords(passwords) {
  const regex = /^[a-zA-Z0-9]{8,20}$/; // Expresión regular para validar contraseñas

  for (let i = 0; i < passwords.length; i++) {
    if (regex.test(passwords[i])) {
      console.log(`${passwords[i]} --> Válida`);
    } else {
      console.log(`${passwords[i]} --> Inválida`);
    }
  }
}

// ✅ Llamamos a la función después de definirla
validatePasswords(passwords);

// Ejercicio 4

const products = [
  { product: "zapatos", stock: 43 }, // producto 1
  { product: "medias", stock: 19 }, // producto 2
  { product: "camiseta", stock: 0 }, // producto 3
];

function checkStockLevels(products) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
      console.log(`${products[i].product} --> En stock`);
    } else {
      console.log(`${products[i].product} --> Agotado`);
    }
  }
}

// ✅ Llamamos a la función para verificar los niveles de stock
checkStockLevels(products);

// Ejercicio 5
// para buscar palabras que terminan en "a"

const words = ["casa", "perro", "silla", "mesa", "gato"];

function acabanEnA(words) {
  return words.every((word) => word.endsWith("a"));
}

// Ejercicio 6
// ordernar arrays de números de menor a mayor

let numeros = [5, 10, 2, 25, 7];

numeros.sort(function (a, b) {
  return a - b;
});

console.log(numeros); // [2, 5, 7, 10, 25]

// Puedes usar una arrow function para simplificar el código

numeros.sort((a, b) => a - b);

// para hacerlo de mayor a menor, simplemente invierte la resta

numeros.sort((a, b) => b - a);

// Ejercicio 7

// Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna

// MATRIZ: Array de 3 filas, cada una con 3 elementos

const matrix = [
  ["HTML", "CSS", "JavaScript"], // Fila 0
  ["Java", "C++", "Python"], // Fila 1
  ["Ruby", "Go", "Swift"], // Fila 2
];

// Llamamos la función y guardamos el resultado
const position = findJavaScript(matrix);
console.log(position); // -> [0, 2] significa: fila 0, columna 2

function findJavaScript(matrix) {
  // 🔄 Primer loop: recorre las FILAS (i = 0, 1, 2)
  for (let i = 0; i < matrix.length; i++) {
    // 🔄 Segundo loop: recorre las COLUMNAS de cada fila (j = 0, 1, 2)
    for (let j = 0; j < matrix[i].length; j++) {
      // 🔍 Revisamos cada elemento: matrix[fila][columna]
      if (matrix[i][j] === "JavaScript") {
        // ✅ ¡Encontrado! Devolvemos [fila, columna]
        return [i, j];
      }
    }
  }

  // ❌ Si terminamos los loops sin encontrarlo, devolvemos [-1, -1]
  return [-1, -1];
}

// Ejercicio 8

// En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. Por suerte, no hay dos libros con el mismo número de páginas.
// Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.

function minAndMaxWord(words) {
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i] < words[minIndex]) {
      minIndex = i;
    }
    if (words[i] > words[maxIndex]) {
      maxIndex = i;
    }
  }

  return [minIndex, maxIndex];
}

/**
 *  Encuentra el índice del libro con menos páginas
 *  y el índice del libro con más páginas dentro de un array.
 *
 *  @param {number[]} words - Array de números que representa la cantidad de páginas de cada libro.
 *  @returns {[number, number]} Array con dos posiciones:
 *          [indiceDelLibroConMenosPaginas, indiceDelLibroConMasPaginas]
 */
function minAndMaxWord(words) {
  // Inicializamos tomando el primer elemento como referencia
  let minIndex = 0;
  let maxIndex = 0;

  // Recorremos el array desde el índice 1
  // porque el índice 0 ya se usó como punto de partida
  for (let i = 1; i < words.length; i++) {
    // Si encontramos un valor menor al mínimo actual,
    // actualizamos el índice del mínimo
    if (words[i] < words[minIndex]) {
      minIndex = i;
    }

    // Si encontramos un valor mayor al máximo actual,
    // actualizamos el índice del máximo
    if (words[i] > words[maxIndex]) {
      maxIndex = i;
    }
  }

  // Devolvemos los índices encontrados
  return [minIndex, maxIndex];
}

// ===== EJERCICIO 9 OBJETOS =====

/* Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información: name con el valor del parámetro name subscribers con el valor del parámetro subs, hash con el valor de la longitud del string name multiplicado por el parámetro subs Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores. ¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola. */

function createObject(name, subs) {
  return {
    name: name,
    subscribers: subs,
    hash: name.length * subs,
    getStatus: function () {
      return `El canal de ${this.name} tiene ${this.subscribers} suscriptores.`;
    },
  };
}

// prueba de la función
const test = createObject("Dani", 100);
console.log(test.getStatus()); // El canal de Dani tiene 100 suscriptores.

// Ejercicio 10

/* Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos. */

function getKeysOfBooleanValues(obj) {
  
  const booleanKeys = []; // Array para almacenar las claves de tipo boolean

  // Recorremos las propiedades del objeto

  for (const key in obj) {
    // Verificamos si la propiedad es del tipo boolean
    if (typeof obj[key] === "boolean") {
      booleanKeys.push(key); // Si es boolean, agregamos la clave al array
    }
  }

  return booleanKeys; // Devolvemos el array con las claves de tipo boolean
}

// prueba de la función
const testObj = { a: true, b: 42, c: false };
console.log(getKeysOfBooleanValues(testObj)); // ['a', 'c']


// Ejercicio 11

/* Somos un equipo de submarinistas. Estamos explorando el fondo marino pero no sabemos qué nos vamos a encontrar porque vamos casi a ciegas. Vamos con un pequeño robot y funciona con un programa que recibe tres parámetros:

Un objeto con la información del fondo marino
Una cadena de texto con el nombre del lugar que queremos explorar
Una cadena de texto con el nombre del objeto que queremos encontrar
Por ejemplo. Con el objeto ocean que nos llega como primer parámetro, podemos explorar el lugar deep y buscar el objeto treasure. Así que intentaríamos acceder a ocean.deep.treasure.


Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false. Sólo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.


Vamos a necesitar asegurarnos que el robot no se rompa, que cuesta mucho dinero, en el caso que no pueda encontrar el lugar o el objeto que le hemos pedido. Así que vamos a usar el operador de encadenamiento opcional para evitar errores.

Pista: ¡Recuerda que en una clase anterior hemos visto cómo podemos acceder a una propiedad de un objeto usando una variable! Por ejemplo, si tenemos un objeto person y una variable key con el valor name, podemos acceder a la propiedad name del objeto person usando person[key] y sería como hacer person.name */

