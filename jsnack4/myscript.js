/*Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero*/
let userNumber;
let inputCorretto = false;

while(inputCorretto == false){
    userNumber = prompt("Dammi un numero di 4 cifre")

    if(userNumber.length == 4){
        inputCorretto=true;
    }else{
        console.log("Ricontrollare il numero inserito")
    }
}

let sum = 0

for(let i=0 ; i<userNumber.length ; i++){
    let addendo = parseInt(userNumber.charAt(i))
    sum = sum + addendo
}

console.log(sum)