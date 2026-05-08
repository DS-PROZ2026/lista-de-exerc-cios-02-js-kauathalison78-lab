const prompt = require('prompt-sync')();
const modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass" ];
const precos = [110000, 135000, 128000, 105000, 180000];
let valor_Cliente = prompt('Digite seu orçamento maximo: ');
let c=0;
for (let i =  0; i < modelos.length; i++) {
    if(valor_Cliente >= precos[i] ){
        console.log(modelos[i]);
        c = c+1;
    }
}
if(c==0){
    console.log("Que tal olhar nossa seção de seminovos?");
}
