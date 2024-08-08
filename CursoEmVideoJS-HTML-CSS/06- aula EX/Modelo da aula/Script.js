function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Erro! verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute('id', "foto")

        if(fsex[0].checked){
            genero="Homem"
            if (idade >= 0 && idade < 3){
                //criança 1
                img.setAttribute("src",'1-3 H.png')
            }else if(idade >= 3 && idade < 8){
                //criança 2
                img.setAttribute("src", "3-8 H.png")
            }else if(idade >= 8 && idade < 12){
                //adolescente 1
                img.setAttribute("src", "8-12 H.png")
            }else if(idade >= 12 && idade < 15){
                //adolescente 2
                img.setAttribute("src", "13-15 H.png")
            }else if(idade >= 15 && idade < 20){
                //adolescente 3
                img.setAttribute("src", "16-20 H.png")
            }else if(idade >= 20 && idade < 26){
                //jovem adulto
                img.setAttribute('src', "20-26 H.png")
            }else if(idade >= 26 && idade < 30){
                //jovem adulto 2
                img.setAttribute('src', "26-30 H.png")
            }else if(idade >= 30 && idade < 40){
                //adulto
                img.setAttribute("src", "30-40 H.png")
            }else if(idade >= 40 && idade < 50){
                //adulto 2
                img.setAttribute("src", "40-50 H.png")
            }else if(idade >= 50 && idade < 60){
                //velho 1
                img.setAttribute("src", "50-60 h.png")
            }else if(idade >= 60 && idade < 70){
                //velho 2
                img.setAttribute("src", "60-70 h.png")
            }else if(idade >= 70 && idade < 150 ){
                //ultimo
                img.setAttribute("src", "70+ h.png")
            }else if(idade > 150 || idade == 150){
                window.alert("ERRO! idade muito avançada")
            }
        }else if(fsex[1].checked){
            genero="Mulher"

            if (idade >= 0 && idade < 3){
                //criança 1
                img.setAttribute("src", '1-3 M..png')
            }else if( idade < 8){
                //criança 2
                img.setAttribute("src", "3-8 M.png")
            }else if( idade < 12){
                //adolescente 1
                img.setAttribute("src", "8-12 M.png")
            }else if( idade < 15){
                //adolescente 2
                img.setAttribute("src", "13-15 M.png")
            }else if(idade < 20){
                //adolescente 3
                img.setAttribute("src", "16-20 m.png")
            }else if(idade < 26){
                //jovem adulto
                img.setAttribute('src', "20-26 M.png")
            }else if(idade < 30){
                //jovem adulto 2
                img.setAttribute('src', "26-30 M.png")
            }else if(idade < 40){
                //adulto
                img.setAttribute("src", "30-40 M.png")
            }else if(idade < 50){
                //adulto 2
                img.setAttribute("src", "40-50 M.png")
            }else if( idade < 60){
                //velho 1
                img.setAttribute("src", "50-60 M.png")
            }else if(idade < 70){
                //velho 2
                img.setAttribute("src", "60-70 m.png")
            }else if(idade >= 70 && idade < 150 ){
                //ultimo
                img.setAttribute("src", "70+ m.png")
            }else if(idade > 150 || idade == 150){
                window.alert("ERRO! idade muito avançada")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `<p><strong>Identifiquei ${genero} com ${idade} anos</strong></p>`
        res.appendChild(img)
    }
}
