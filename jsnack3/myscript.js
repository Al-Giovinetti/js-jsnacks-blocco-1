//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.

const arresyList = []

for(let i=0; i<6; i++){
    let promptInput = parseInt(prompt("dammi un numero"))
    if(promptInput % 2 != 0){
        console.log("numero dispari - aggiunto alla lista")
        arresyList.push(promptInput)
    }
}