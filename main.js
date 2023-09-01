const form = document.getElementById('form-valid');

function validarFormulario(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseInt(document.getElementById('campoA').value);
    const valorB = parseInt(document.getElementById('campoB').value);

    const mensagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;

    if (validarFormulario(valorA, valorB)) {
        alert(mensagemSucesso);

        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
    } else if (valorB === valorA) {
        alert("Não é válido pois B é igual a A.");
    } else {
        alert("Não é válido pois B não é maior que A.");
    }
});
