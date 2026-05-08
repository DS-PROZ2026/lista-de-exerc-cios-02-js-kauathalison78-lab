const prompt = require ('prompt-sync')();
const caminhao = [
    {modelo: "Benz", quilometragem: 9000, datarev:4},
    {modelo: "Jeep", quilometragem: 500, datarev:4},
    {modelo: "Mercerds", quilometragem: 1000, datarev:6},
    {modelo: "Fiat", quilometragem: 35000, datarev:8}
]
let frotaManutencao = []

for (let i =  0; i < caminhao.length; i++) {
    if (caminhao[i].quilometragem > 10000 || caminhao[i].datarev > 6){
        frotaManutencao.push(caminhao[i]);
    }
    }
    console.log(frotaManutencao.length);

