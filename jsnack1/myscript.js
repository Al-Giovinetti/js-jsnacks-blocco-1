//Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.//
const btnCalc = document.querySelector("button");

let inputNumber=document.querySelector("input")
inputNumber=0

btnCalc.addEventListener("click",function(){
    for(let index = 0 ; index == 10 ; index++ ){
        inputNumber=inputNumber.value + inputNumber.value
        console.log(inputNumber.value)
    }

}
)


console.log(inputNumber)