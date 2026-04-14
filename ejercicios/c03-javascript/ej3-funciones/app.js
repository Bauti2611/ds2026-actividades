const calcularPrecioFinal = (monto, medioPago) => {
    if (monto < 200) return monto;
    if (monto >= 200 && monto <= 400) {
        switch (medioPago) {
            case 'E': return monto * 0.7;
            case 'D': return monto * 0.8;
            case 'C': return monto * 0.9;
            default: return "Medio de pago inválido";
        }
    }
    if (monto > 400) return monto * 0.6;
};

console.log(`Monto: $100 | Pago: E | Final: $${calcularPrecioFinal(100, "E")}`);
console.log(`Monto: $300 | Pago: E | Final: $${calcularPrecioFinal(300, "E")}`);
console.log(`Monto: $300 | Pago: D | Final: $${calcularPrecioFinal(300, "D")}`);
console.log(`Monto: $300 | Pago: C | Final: $${calcularPrecioFinal(300, "C")}`);
console.log(`Monto: $500 | Pago: C | Final: $${calcularPrecioFinal(500, "C")}`);