const prompt = require('prompt-sync')();
let atletas = [];
for (let i =0; i < 5; i++) {
    atletas.push(prompt(`digite o nome do atleta ${i} :`));
}
for(let i=0;i<5;i++){
    if(i == 0){
        console.log(`O atleta que ganhou medalha de ouro é ${atletas[i]}`);      
    }else if(i == 1){   
 console.log(`O atleta que ganhou medalha de prata é ${atletas[i]}`);      
}else if(i == 2){
    console.log(`O atleta que ganhou medalha de bronze é ${atletas[i]}`);
}else{
    console.log(`O atleta ${atletas[i]} ganhou medalha de honra!`);
}
}