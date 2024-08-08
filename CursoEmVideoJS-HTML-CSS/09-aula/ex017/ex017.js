function tab(){
    var num = document.getElementById("num")
    let tab = document.getElementById("SETAB")

    if(num.value.lenght == 0){
        window.alert("Por favor digite um número")

    }else{
        let n = Number(num.value)
        let x = 1
        tab.innerHTML = ""
        for(x;x <= 10;x += 1){
            let i1 = document.createElement("option")
            i1.text = `${n} x ${x} = ${n*x}`
            tab.appendChild(i1)
        }1
    }
}