//Creo una lista di invitati
const gatsbyList=["Biancaneve","Palla di lardo","Joker"];

// chiedo un nome
const inputName= prompt("dimmi il tuo nome")

let enterParty = false

for(let i=0; i<gatsbyList.length;i++){

    if(gatsbyList[i]==inputName){
        enterParty = true
    }
    console.log(enterParty,gatsbyList[i])
}

let output;
if (enterParty == true){
     output = "Sei in lista"
}else{
    output="Vattene"
}

document.getElementById("output").innerHTML=output



