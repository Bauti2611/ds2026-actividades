const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];

for (const num of numeros) {
    suma += num;
    if (num > mayor) mayor = num;
    
    if (num < menor) menor = num;
    
}

const promedio = suma / numeros.length;

console.log(`suma total: ${suma}`);
console.log(`promedio: ${promedio}`);
console.log(`mayor: ${mayor}`);
console.log(`menor: ${menor}`);

const generarAsteriscos = (n) => {
    let asteriscos = '';
    for (let i = 0; i < n; i++) {
        asteriscos += '*';
    }
    return asteriscos;
};
console.log(generarAsteriscos(5));
console.log(generarAsteriscos(10));
console.log(generarAsteriscos(23));