function cont(){
    var inicio = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("pass")
    var res = document.getElementById("res")
    
    if(inicio.value.length <= 0){
        res.innerHTML += "Impossivel contar"

    }else if(fim.value.length <= 0){
    res.innerHTML += "Impossivel contar"

    }else if(passo.value.length <= 0){
    res.innerHTML += "Impossivel contar"

    }else{
        res.innerHTML += "<p>Contando...</p>"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)   
        if(p<=0){
            window.alert("impossivel contar, considerando passo como 1")
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f;c = c + p ){

            res.innerHTML += `${c} \u{1F449}`
        }
        }else{
            for(var c = i; c >= f;c = c - p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        
    }
        res.innerHTML += `\u{1f3c1}`
    
    
}