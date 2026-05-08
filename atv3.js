const prompt = require('prompt-sync')();
let mochila = [ ];
const espacomax = 4;
const itensencontrados = ("faca, comida, corda, aguá, esparadrapo, arma ");

for (let i = 0; i < itensencontrados.length; i++)  {
    let itemnovo = itensencontrados[i];

    if(mochila.length < espacomax ) {
        mochila.push(itemnovo);
        console.log(`${itemnovo} adicionado automaticamente.`);
    } else { 
        let resposta = prompt(`Mochila cheia ! deseja descartar o primeiro item ${mochila[0]} para pegar o novo item ${itemnovo} ? sim ou nao .`);

        if (resposta.toUpperCase() === "S") {
            mochila.shift();
            mochila.push(itemnovo);
            console.log(`Você trocou o item antigo por : ${itemnovo}`);
        } else {
            console.log(`Voce decidiu não pegar o item : ${itemnovo}`);
        }

     }
 }
 console.log(`conteudo final da mochila ${mochila}`);




