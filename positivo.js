function verificaNumero(numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativo';
    } else {
        return 'Zero';
    }
}

console.log(verificaNumero(10)); 
console.log(verificaNumero(-5)); 
console.log(verificaNumero(0)); 