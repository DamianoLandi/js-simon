//Creazione Array di Numeri Random

let numbList = [];

for(let i = 0; i < 5; i++){
    let randomNumb = Math.floor(Math.random() * 100) + 1;
    numbList.push(randomNumb);
}

console.log(numbList);

//Generazione Alert

let message = "";

for(let i = 0; i < numbList.length; i++){
    message += numbList[i] + " ";
}

console.log(message);

alert(message);

//Logica

let clock = setTimeout(myFunction, 30000);

function myFunction(){
    let inputList = [];
    for(let i = 0; i < numbList.length; i++){
        const numbInput = parseInt(prompt("Inserisci un numero"));
        inputList.push(numbInput);
    }
    console.table(inputList);

    let counter = 0;

    let resultMessage = "[ ";

    for(let i = 0; i < numbList.length; i++){
        if(numbList[i] === inputList[i]){
            resultMessage += inputList[i] + " ";
            counter += 1;
        }
    }

    if(counter === 0){
        resultMessage = "Oh no! Non ne hai indovinato neanche uno!"
    }else if (counter === 1){
        resultMessage += "] Complimenti! Hai indovinato " + counter + " numero!"
    }else{
        resultMessage += "] Complimenti! Hai indovinato " + counter + " numeri!"
    }

    alert(resultMessage);

}