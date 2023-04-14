let patronUsuario = [];
let patronMaquina = [];
let ronda = 0;

document.querySelector('#empezar').onclick = function(event){
    jugar();
}

function jugar(){
    turnoMaquina();
    turnoUsuario();
}

function turnoMaquina() {
    bloquearUsuario();
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
        desbloquearUsuario();
    }, RETRASO_TURNO_JUGADOR);

    patronUsuario = [];
    ronda ++;
}

function turnoUsuario(){
    document.querySelectorAll('.color').forEach((div) => {
        div.onclick = function (e) {
            let color = e.target;
            let index;
            resaltar(color);
            patronUsuario.push(color);
            index = patronUsuario.length;

            if(patronUsuario[index-1] !== patronMaquina[index-1]){
                perder();
            }
            else if(patronUsuario.length == patronMaquina.length){
                bloquearUsuario();
                setTimeout(jugar, 1000);
            }
        }
    });
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

function bloquearUsuario(){
    document.querySelectorAll('.color').forEach(function(colores){
    colores.onclick = function(){
    };
    }); 
}

function desbloquearUsuario(){
    document.querySelectorAll('.color').forEach(function(colores){
        colores.onclick = turnoUsuario;
    });
}

function perder(){
    bloquearUsuario();
    patronUsuario = [];
    patronMaquina = [];
    ronda = 0;
}

