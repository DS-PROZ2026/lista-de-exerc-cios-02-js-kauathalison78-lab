const prompt =  require ('prompt-sync')();
const produtos = ["Moniter", "Mouse", "Teclado", "Cabo HDMI"];
const quantidade =[10, 2, 8, 3];
let c = 0
for (let i =  0; i < produtos.length; i++) {
    if (quantidade[i] < 5){
        console.log(`${produtos[i]}`);
    }
}
