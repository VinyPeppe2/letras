let resultLeters = document.getElementById('rLetters');
let buttonContar = document.getElementById('bContador');
let letras = document.getElementById('letras');
const cabecalho = 'No texto há: ';
let som = new Audio('https://cdn.pixabay.com/download/audio/2023/05/01/audio_19d45620e3.mp3?filename=keyboard-typing-290582.mp3'); // 🔥
let maqEscrever = new Audio('escrever.mp3')
maqEscrever.load()

function contarLetras() {
    let texto = letras.value.trim();
    let espacos_vazio = (texto.match(/ /g) || []).length;
    let total_letras = texto.replace(/\s/g, '').length;
    let totalCaracteres = total_letras + espacos_vazio;
    let resultado = '';

    if (totalCaracteres === 0) {
        resultado = 'Por favor, insira o texto e tente novamente!';
    }
    else if (totalCaracteres === 1) {
        resultado = `-Letras: ${total_letras}<br>- Vazias: ${espacos_vazio}<br>- Total caracteres: ${totalCaracteres}`;
    }
    else {
        resultado = `-Letras: ${total_letras}<br>- Vazias: ${espacos_vazio}<br>- Total caracteres: ${totalCaracteres}`;
    }

    resultLeters.innerHTML = ''; 
    let i = 0;
    som.currentTime = 0; 

    function animarTexto() {
        if (i < resultado.length) {
            if (resultado[i] === '<' && resultado.slice(i, i + 4) === '<br>') {
                resultLeters.innerHTML += '<br>';
                i += 4; 
            } else {
                resultLeters.innerHTML += resultado[i];
                maqEscrever.play()
                som.play();
                i++;
            }
            setTimeout(animarTexto, 50);
        } else {
            maqEscrever.pause();
            som.pause(); 
            falarTexto(`${cabecalho}, ${total_letras}letras! Células vazias são: ${espacos_vazio}, totalizando ${totalCaracteres} caracteres!`) 
            //falarTexto(resultado.replace(/<br>/g, '')); // 🔊 Agora fala
        }
    }
    animarTexto();

    resultLeters.style.border = '2px solid #4CAF50';
    resultLeters.style.padding = '10px';
    resultLeters.style.animation = 'pulse 1.5s infinite';
}

function falarTexto(texto) {
    let speech = new SpeechSynthesisUtterance(texto);
    speech.lang = 'pt-BR';
    speech.rate = 1.55 // Velocidade da fala
    speech.volume = 1; // Volume
    speech.pitch = 1.1;
    window.speechSynthesis.speak(speech);
}

/*function listarVozes() {
    let vozes = speechSynthesis.getVoices();
    console.log('Vozes disponíveis no navegador:');
    vozes.forEach((voz, index) => {
        console.log(`${index}: ${voz.name} - ${voz.lang} (${voz.default ? 'Padrão' : ''})`);
    });
}
window.speechSynthesis.onvoiceschanged = listarVozes;*/

buttonContar.addEventListener('click', contarLetras);

let style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
    0% { box-shadow: 0 0 5px #4CAF50; }
    50% { box-shadow: 0 0 20px #4CAF50; }
    100% { box-shadow: 0 0 5px #4CAF50; }
}`;
document.head.appendChild(style);
