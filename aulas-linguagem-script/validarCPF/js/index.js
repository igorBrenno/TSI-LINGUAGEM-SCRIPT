function clicando () {
    const cpf = document.getElementById("entrada").value;
    var numeros = cpf.slice(0, 3) + cpf.slice(4, 7) + cpf.slice(8, 11);
    var s = 0;
    var j = 2;
    var numinv = []
    for (let i = numeros.length; i >= 0; i--) {
        numinv.push(numeros[i])
    }
    for (let i = 1; i < numinv.length; i++) {
        s += numinv[i] * j;
        
        if (j < 10) {
            j++
        } 
    }
    resto = s % 11;
    var pridig = 11 - resto ;
    if (resto > 9) pridig = 0

    numinv.shift();
    numinv.unshift(pridig);
    
    s = 0;
    j = 2;
    for (let i = 0; i < numinv.length; i++) {
        s += numinv[i] * j;
        if (j < 11) {
            j++
        } 
    }
    resto = s % 11

    var segdig = 11 - resto ;
    if (resto > 9) segdig = 0
    numinv.unshift(segdig);
    numinv.reverse()

    var verif = 0;
    var num = cpf.slice(0, 3) + cpf.slice(4, 7) + cpf.slice(8, 11) + cpf.slice(12, 14);
    for (let i = 0; i < numinv.length; i++) {
        if (numinv[i] == num[i]) {
            verif = 1
        }
        else {
            verif = 0
        }
    }

    if (verif) {
        alert("CPF Valido!")
    } else {
        alert("CPF Invalido!")
    }
    
}
