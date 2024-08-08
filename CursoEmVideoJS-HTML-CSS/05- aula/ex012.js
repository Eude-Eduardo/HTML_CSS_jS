var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if(hora < 12){
    console.log("bom dia")
}else if(hora > 12){
console.log("Boa Tarde")
}else if(hora > 18){
console.log("Boa Noite")
}else if(hora > 24){
    console.log("Boa Madrugada")
}