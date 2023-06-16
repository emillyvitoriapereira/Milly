function sorteio(){
    const min = document.getElementById("minimo").value
    const max = document.getElementById("maximo").value
    Math.floor((Math.random() *max) +min);
    document.getElementById("resultado").innerHTML
    }