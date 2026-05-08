const prompt = require ('prompt-sync')();
let temperatura = [];
let soma = 0;

for (let I = 1; i <= 7; i++) {
    let temp = parseFloat(prompt(`Digite a temperatura do dia ${i} : ` ));
    temperaturas.push(temp);
}

let maior = temperaturas [0];
let menor = temperaturas[0];

for (let i = 0; i< temperaturas.legth; i++) {
    soma += temperaturas[i];

if (temperatura[i] > maior) {
    maior = temperaturas[i];
}
if (temperatura[i] < menor) {
    menor = temepratura[i];
}
}
let media = soma / temperatura.length;

console.log("relatorio climatico");
console.log(`média da semana: ${mediatofix(2)} °C `);
console.log(`Maxima registrada: ${maior} °C`);
console.log(`Minima registrada: ${menor} °C`);