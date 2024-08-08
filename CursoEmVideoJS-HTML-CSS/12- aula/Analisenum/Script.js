let num = document.getElementById("num1")
let list = document.getElementById("tabn")
let res = document.getElementById("res")
let val = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false

    }

}
function isLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return false
    }else{
        return true
    }
}

function add(){
    res.innerHTML = ""
    if(isNumero(num.value) && isLista(num.value, val) ){
        let tb1 = document.createElement("option")
        val.push(Number((num.value)))
        tb1.text = `O número ${num.value} foi adicionado`
        list.appendChild(tb1)
        

    }else{
        window.alert("Valor inválido ou já está na lista")

    }
    num.value = ""
    num.focus()
}

function final(){
    var total = val.length

    if(val.length <= 1){
        window.alert("Adicione valores antes de finalizar")
    }else{
        res.innerHTML = `Ao todo, temos ${total} números.`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, val)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, val)}.</p>`

        var soma = 0 
        for(let u = 0;u < val.length;u++){
            soma +=val[u]
        }

        res.innerHTML += `<p>A soma dos números é ${soma}.</p>`

        var media = soma / val.length
        res.innerHTML += `<p>A media dos números é ${media}.</p>`


    }
}