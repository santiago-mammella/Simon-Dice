let patronUsuario = [];
let patronMaquina = [];
let ronda = 0;
document.querySelector('#empezar').onclick = function(event){
    jugar();
}
function jugar(){
    turnoMaquina();
}
function turnoMaquina() {
    let nuevoColor = obtenerColorAleatorio();
    patronMaquina.push(nuevoColor);

    const RETRASO_TURNO_JUGADOR = (patronMaquina.lenght + 1) * 1000;

    patronMaquina.forEach(function(color, index){
        const RETRASO_MS = (index + 1) * 1000;
        setTimeout(function(){
            resaltar(color);
        }, RETRASO_MS);
    });

    setTimeout(function(){
    }, RETRASO_TURNO_JUGADOR);

    patronUsuario = [];
    ronda ++;
}

function resaltar(color){
    color.style.opacity = 1;
    setTimeout(function(){
        color.style.opacity = 0.5;
    }, 500);
}

function obtenerColorAleatorio(){
    const colores = document.querySelectorAll('.color');
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}

