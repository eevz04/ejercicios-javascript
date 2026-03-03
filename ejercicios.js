const sales = [
    { item: "reloj", quantity: 2 , price:100 },
    { item: "lapto", quantity:4 , price: 950},
    { item: "shampoo", quantity:3 , price:10 }
];  

function calculateTotalSales(sales) {
   let total = 0;
   for (let i = 0; i < sales.length; i++) {
    
    total += sales[i].quantity *sales[i].price;
   
   }
   
   return total;

}

console.log(calculateTotalSales(sales));



// Ejercicio 2

const orders = [
    { item: "cuaderno", quantity: 2, price: 10 },
    { item: "celular", quantity: 3, price: 500 },
    { item: "audifonos", quantity: 1, price: 150 }
];


function generateReceipt(orders) {
    let grandTotal = 0; // aquí acumularemos el total general

    for (let i = 0; i < orders.length; i++) {
        let itemTotal = orders[i].quantity * orders[i].price;

        grandTotal += itemTotal; // acumulamos el total general

        console.log(`Artículo: ${orders[i].item}, Cantidad: ${orders[i].quantity}, Precio Unitario: ${orders[i].price}, Total: ${itemTotal}`);

    }

    // aquí imprimiremos el total general
    console.log(`Total General: ${grandTotal}`);

}

// ✅ Llamamos a la función para que se ejecute
generateReceipt(orders);


// Ejercicio 3

const passwords = [
    "abc12345",           // válida: 8 caracteres alfanuméricos
    "password!",           // inválida: contiene símbolo "!"
    "User2023",            // válida: solo letras y números
    "short",               // inválida: menos de 8 caracteres
    "thisisaverylongpassword123" // inválida: más de 20 caracteres
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
    { product: "camiseta", stock: 0 }  // producto 3
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
    return words.every(word => word.endsWith('a'));  
}


// Ejercicio 6 
// ordernar arrays de números de menor a mayor

let numeros = [5, 10, 2, 25, 7]

numeros.sort(function(a, b) {
    return a - b
})

console.log(numeros) // [2, 5, 7, 10, 25]

// Puedes usar una arrow function para simplificar el código

numeros.sort((a, b) => a - b)


// para hacerlo de mayor a menor, simplemente invierte la resta

numeros.sort((a, b) => b - a) 

// Ejercicio 7

// Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna

// MATRIZ: Array de 3 filas, cada una con 3 elementos

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],  // Fila 0
    ['Java', 'C++', 'Python'],      // Fila 1
    ['Ruby', 'Go', 'Swift']         // Fila 2
]

// Llamamos la función y guardamos el resultado
const position = findJavaScript(matrix)
console.log(position) // -> [0, 2] significa: fila 0, columna 2

function findJavaScript(matrix) {
    // 🔄 Primer loop: recorre las FILAS (i = 0, 1, 2)
    for (let i = 0; i < matrix.length; i++) {
        
        // 🔄 Segundo loop: recorre las COLUMNAS de cada fila (j = 0, 1, 2)
        for (let j = 0; j < matrix[i].length; j++) {
            
            // 🔍 Revisamos cada elemento: matrix[fila][columna]
            if (matrix[i][j] === 'JavaScript') {
                // ✅ ¡Encontrado! Devolvemos [fila, columna]
                return [i, j]
            }
        }
    }
    
    // ❌ Si terminamos los loops sin encontrarlo, devolvemos [-1, -1]
    return [-1, -1]            
}

// Ejercicio 8
// En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. Por suerte, no hay dos libros con el mismo número de páginas.
// Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.

function minAndMaxWord(words) {
    let minIndex = 0
    let maxIndex = 0

    



}









