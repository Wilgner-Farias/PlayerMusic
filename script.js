let musica = document.querySelector('audio');

// Atribuindo funções

let play = document.querySelector('#play').addEventListener('click', (sound) => {
    playSound(sound);
});

let pause = document.querySelector('#stop').addEventListener('click',(sound) => {
    stopSound(sound);
});

// Funções de Play e Stop

function playSound(event) {
    let playMusic = document.querySelector('#musica');
    if(playMusic) {
        playMusic.play();
    }
};

function stopSound(event) {
    let stopMusic = document.querySelector('#musica');
    if(stopMusic) {
        stopMusic.pause();
    }
};

// Temporizador

musica.addEventListener('timeupdate', atualizarBarra);

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let tempoDecorrido = document.querySelector('#inicio');
    tempoDecorrido.textContent = segundosConversor(Math.floor(musica.currentTime));  
};

function segundosConversor(segundos) {
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinuto+':'+campoSegundos;
};