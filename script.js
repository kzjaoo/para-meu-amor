function sim(){
    alert("TE AMO MAIS MEU BEMMM S2")
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(0, 90);
    btn.style.left = geraPosicao(0, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}