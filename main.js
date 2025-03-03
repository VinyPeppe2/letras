let resultLeters = document.getElementById('rLetters');
let buttonContar = document.getElementById('bContador');
let letras = document.getElementById('letras');
const cabecalho = '-No texto há: ';

function contarLetras() {
    let texto = letras.value.trim(); // Remove espaços nas pontas
    let espacos_vazio = (texto.match(/ /g) || []).length; // Conta espaços
    let total_letras = texto.replace(/\s/g, '').length; // Remove todos os espaços para contar letras

    resultLeters.innerHTML = `${cabecalho} ${total_letras} letras e ${espacos_vazio} vazias`;
}

buttonContar.addEventListener('click', contarLetras);
