const form = document.getElementById('form-valid');
const mensagemElement = document.getElementById('mensagem');

function validarFormulario(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseInt(document.getElementById('campoA').value);
    const valorB = parseInt(document.getElementById('campoB').value);

    const mensagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;

    if (validarFormulario(valorA, valorB)) {
        mensagemElement.textContent = mensagemSucesso;
        mensagemElement.style.color = 'green';
        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
    } else if (valorB === valorA) {
        mensagemElement.textContent = 'Não é válido pois B é igual a A.';
        mensagemElement.style.color = 'red';
    } else {
        mensagemElement.textContent = 'Não é válido pois B não é maior que A.';
        mensagemElement.style.color = 'red';
    }
});
