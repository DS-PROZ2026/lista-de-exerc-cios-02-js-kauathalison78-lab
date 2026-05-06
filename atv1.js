const prompt = require('prompt-sync')();

const listaProibida = ["Thalison", "Daniel", "Andre"];
const visitantesAutorizados = [];

for (let i = 1; i <= 3; i++) {
    let nome = prompt(`Digite o nome do visitante ${i} :`);

    if (listaProibida.includes(nome)) {
        console.log(`ALERTA: Segurança acionada para o visitante ${nome}!`);
    } else {
        
        visitantesAutorizados.push(nome);
        console.log(`${nome} autorizado com sucesso.`);
    }
}

console.log("Visitantes Autorizados:", visitantesAutorizados);
