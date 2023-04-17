let valor1 = 1, valor2 = 1, pos = 1;
num = prompt("Ingrese un número:");
num = parseInt(num);

while(num > valor1 && num > valor2) {
    if(valor1 < valor2) {
        valor1 += valor2;
    } else {
        valor2 += valor1;
    }
    pos++;
}

if(num == valor1 || num == valor2) {
    alert("El número " + num + " pertenece a la sucesión en la posición " + (pos + 1));
} else {
    alert("El número " + num + " no pertenece a la sucesión.");
}