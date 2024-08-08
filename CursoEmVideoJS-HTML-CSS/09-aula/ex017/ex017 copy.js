function tab(){
    let num = document.getElementById("num")
    let tab = document.getElementById("tab")

    if(num.value.length == null){
        window.alert("Por favor digite um número")

    }else{
        let n = Number(num.value)
        let x = 1
        tab.innerHTML = ""

        for(x; x <= 10; x += 1){
            let tb = document.createElement("option")
            tb.text = `${n} x ${x} = ${n*x}`
            tab.appendChild(tb)
        }
    }
}