let num = document.getElementById("num")
let res = document.getElementById("res")
let sel = document.getElementById("tab")
let n = Number(num.value)

function conv(){
    res.innerHTML = "Resultado: "

    if(num.value <= 0){
        window.alert("Número Inválido")
    }else if(sel.value == "SM"){
        var sm = num.value/60
        if(sm == 1){
            res.innerHTML += `${num.value} segundos é igual a ${sm} minuto.`

        }else if(num.value == 1){
            res.innerHTML += `${num.value} segundo é igual a ${sm} minutos.`
        }else{
            res.innerHTML += `${num.value} segundos é igual a ${sm} minutos.`
        }
    }
    if(sel.value == "MH"){
        var mh = num.value / 60
        if(mh == 1){
            res.innerHTML += `${num.value} minutos é igual a ${mh} hora.`
        }else if(num.value == 1){
            res.innerHTML += `${num.value} minuto é igual a ${mh} horas.`
        }else if(num.value == 30){
            res.innerHTML += `${num.value} minutos é igual a meia hora.`
        }else{
            res.innerHTML += `${num.value} minutos é igual a ${mh} horas`
        }
    }
    if(sel.value == "HD"){
        var hd = num.value / 24
        if (hd == 1){
            res.innerHTML += `${num.value} horas é igual a ${hd} dia.`
        }else if(num.value == 1){
            res.innerHTML += `${num.value} hora é igual a ${hd} dias.`
        }else if(num.value == 12){
            res.innerHTML += `${num.value} horas é igual a meio dia.`
        }else{
            res.innerHTML += `${num.value} horas é igual a ${hd} dias`
        }
    }
    num.value=""
    num.focus()
}