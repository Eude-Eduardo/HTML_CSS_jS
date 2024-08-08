function run(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("im")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 14
    
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

    if (hora >= 0 && hora < 12){
        //dia
        img.src = '1.png'
        document.body.style.background = "#fbec5d"
    } else if (hora >= 12 && hora < 18){
        //tarde
        img.src = '2.png'
        document.body.style.background = "#fca23d"
    } else {
        //noite
        img.src = '3.png'
        document.body.style.background = "#202928"        
    }
        
    
}