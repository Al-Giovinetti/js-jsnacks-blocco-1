const guestList=["zio","mara","tizio","vizio","medesimo"]

const userName=prompt("Qual'è il tuo nome?")
let trovato= false
for(let i = 0 ;i < guestList.length;i++){
    if(guestList[i]==userName){
        trovato=true
    }
}
if(trovato== true){
    console.log("Prego puoi entrare")
}else{
    console.log("spiacente non sei sulla lista")
}