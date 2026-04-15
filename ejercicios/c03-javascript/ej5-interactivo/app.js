// Ahora sí los selectores buscan exactamente lo que dice el HTML
const input = document.querySelector('#altura');
const boton = document.querySelector('#boton-generar'); 
const error = document.querySelector('#error');
const pre = document.querySelector('#resultado');

boton.addEventListener('click', () => {
    
    error.textContent = "";
    pre.textContent = "";

    const altura = parseInt(input.value);
    
    if (isNaN(altura) || altura < 1) {
        error.textContent = "Error: Por favor, ingresá un número válido mayor a 0.";
        return; 
    }

    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        for (let j = 0; j < i; j++) {
            arbol += "*";
        }
        arbol += "\n"; 
    }

    pre.textContent = arbol;
});