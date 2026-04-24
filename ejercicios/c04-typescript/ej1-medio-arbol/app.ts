
function generarAsteriscos(altura: number): string {
    let arbol: string = "";
    
    for (let i = 1; i <= altura; i++) {
        
        for (let j = 0; j < i; j++) {
            arbol += "*";
        }
        
        arbol += "\n"; 
    }
    
    return arbol;
}


const input = document.querySelector('#altura') as HTMLInputElement;
const boton = document.querySelector('#boton-generar') as HTMLButtonElement;
const error = document.querySelector('#error') as HTMLParagraphElement;
const pre = document.querySelector('#resultado') as HTMLPreElement;


boton.addEventListener('click', () => {

    error.textContent = "";
    pre.textContent = "";

    const altura: number = parseInt(input.value);
    

    if (isNaN(altura) || altura < 1) {
        error.textContent = "error ingresa un nujmero valido.";
        return; 
    }

    pre.textContent = generarAsteriscos(altura);
});