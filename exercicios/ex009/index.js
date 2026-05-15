

function verificar() {
    const pais = document.getElementById('pais').value;
    const resultado = document.getElementById('resultado');
    if (pais == "Brasil") {
        resultado.innerText= 'Você é Brasileiro!';
        } else {
        resultado.innerText = 'Você é Estrangeiro!';
}
}