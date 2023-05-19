//Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.//
let sum = 0;

for (let index = 0; index < 10; index++) {
   if(parseInt(prompt("Dammi un numero"))!=isNaN){
    
        // sum = sum + parseInt(prompt('Insert a number'));
        sum += parseInt(prompt("Dammi un numero"))

   }
}
console.log(sum)