//Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.//
let sum = 0;
let promptValue ;
for(let i=0; i<10;i++){
   promptValue = parseInt(prompt("dammi un numero"))
   console.log(promptValue);
   sum = sum + promptValue;
   console.log(sum)
}
