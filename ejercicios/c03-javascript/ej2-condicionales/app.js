const clasificarNota = (nota) => {
    if (nota < 4) return "Desaprobado";  
    if (nota >= 4 && nota <= 7) return "Aprobado";   
    if (nota >= 8) return "Promocionado"; 
    
    return "Nota inválida"; 
};

console.log(clasificarNota(2)); 
console.log(clasificarNota(6)); 
console.log(clasificarNota(9));

const diaDeLaSemana = (numero) => {
    let dia = "";
    switch (numero) {
        case 1: dia = "Lunes"; break;
        case 2: dia = "Martes"; break;
        case 3: dia = "Miércoles"; break;
        case 4: dia = "Jueves"; break;
        case 5: dia = "Viernes"; break;
        case 6: dia = "Sábado"; break;
        case 7: dia = "Domingo"; break;
        default: return "Dia inválido";
    }
if (numero === 6 || numero === 7) dia += "(fin de semana) ";
return dia;
}; 

console.log(diaDeLaSemana(1)); 
console.log(diaDeLaSemana(3)); 
console.log(diaDeLaSemana(7)); 