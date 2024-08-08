function cl(){
    let num = document.getElementById("num")
    let sel = document.getElementById("tab")
    let res = document.getElementById("res")

    

    if(num.value == 0){
        window.alert("Erro! digite um número")
    }else {
    if(sel.value == "Km"){
        var n = Number(num.value) 
        let Mk = n / 1.609
        let M = Mk.toFixed(3)

        res.innerHTML = `${num.value} Quilômetros são ${M} milhas`

        
    }else {
        var n1 = Number(num.value)
        let KM = n1 * 1.6
        let k = KM.toFixed(3)

        res.innerHTML = `${num.value} Milhas são ${k} quilômetros`
    }
}
num.value = ""
num.focus()
}