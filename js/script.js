//Creazione Array di Numeri Random

let numbList = [];

for(let i = 0; i < 5; i++){
    let randomNumb = Math.floor(Math.random() * 100) + 1;
    numbList.push(randomNumb);
}

console.log(numbList);

