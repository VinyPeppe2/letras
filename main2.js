let resultLeters = document.getElementById('rLetters');
let buttonContar = document.getElementById('bContador');
let letras = document.getElementById('letras');
const cabecalho = 'No texto há: ';
const velocidade = 50; // Velocidade da digitação
let cores = ['#4CAF50', '#FF5733', '#FFC300', '#3498DB'];

function contarLetras() {
    let texto = letras.value.trim();
    let espacos_vazio = (texto.match(/ /g) || []).length;
    let total_letras = texto.replace(/\s/g, '').length;

    let resultado = `${cabecalho}<br>${total_letras} letras<br>${espacos_vazio} vazias`;
    resultLeters.innerHTML = ''; // Limpa resultado anterior
    let i = 0;

    // 🔥 Efeito de pulsação antes de começar
    resultLeters.classList.add('pulse');

    function animarTexto() {
        if (i < resultado.length) {
            resultLeters.innerHTML += resultado[i];
            i++;
            setTimeout(animarTexto, velocidade);
        }
    }
    animarTexto();

    // Cor aleatória 🔥
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.documentElement.style.setProperty('--color', corAleatoria);
}

buttonContar.addEventListener('click', contarLetras);

// Animação CSS sempre ativa
let style = document.createElement('style');
style.innerHTML = `
:root {
    --color: #4CAF50; 
}
.pulse {
    border: 2px solid var(--color);
    padding: 10px;
    transition: all 0.5s ease;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 5px var(--color); }
    50% { box-shadow: 0 0 20px var(--color); }
    100% { box-shadow: 0 0 5px var(--color); }
}`;
document.head.appendChild(style);

