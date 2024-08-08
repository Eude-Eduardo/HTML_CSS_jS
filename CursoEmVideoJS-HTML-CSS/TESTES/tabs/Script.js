function cl(){
    let num = document.getElementById("num")
    let tab = document.getElementById("seltab")

    if(num.value.length == 0){ 
        window.alert("Por favor digite um número!")
    }else{
        var n = Number(num.value)
        var x = 1
        tab.innerHTML = ""

        for(x; x <= 10; x++){
            var i = document.createElement("option")
            i.text = `${n} x ${x} = ${n*x} `
            tab.appendChild(i)
        }
    }
}