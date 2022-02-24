function botaoEnviar (event) {
event.preventDefault ();
}
window.onload = function () {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', botaoEnviar);
    const limpaBtn = document.querySelector('#clear-btn');
    limpaBtn.addEventListener('click', limparCampo);
}

function limparCampo () {
    const elementosForm = document.querySelectorAll('inputgit statu');
    const areaTexto = document.querySelector('textarea');
    for (let index = 0; index < elementosForm.length; index += 1) {
        const userInput = elementosForm[index];
        userInput.value = '';
        userInput.checked = false;
    }
    areaTexto.value = '';
}