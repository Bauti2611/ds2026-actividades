"use strict";
function generarAsteriscos(altura) {
    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        for (let j = 0; j < i; j++) {
            arbol += "*";
        }
        arbol += "\n";
    }
    return arbol;
}
const input = document.querySelector('#altura');
const boton = document.querySelector('#boton-generar');
const error = document.querySelector('#error');
const pre = document.querySelector('#resultado');
boton.addEventListener('click', () => {
    error.textContent = "";
    pre.textContent = "";
    const altura = parseInt(input.value);
    if (isNaN(altura) || altura < 1) {
        error.textContent = "error ingresa un nujmero valido.";
        return;
    }
    pre.textContent = generarAsteriscos(altura);
});
