let jugador1, jugador2, jugador3, jugador4; jugador1 = prompt(`¿Quién es el primer jugador?`); jugador2 = prompt(`¿Quién es el segundo jugador?`); jugador3 = prompt(`¿Quién es el tercer jugador?`); jugador4 = prompt(`¿Quién es el cuarto jugador?`); 
let texto, texto2;
function casillabowser (){
    let numero = parseInt(Math.random() * 5 + 1);
    if(numero == 1){texto = "Retrocedes25casillas"; showHide ();}
    if(numero == 2){texto = "Ledastodastusmonedasaljugadorqueelijas"; showHide ();}
    if(numero == 3){texto = "Intercambiastuposiciónconladeljugadormásatrasado"; showHide ();}
    if(numero == 4){texto = "Nomuevesdurantetresturnos"; showHide ();}
    if(numero == 5){texto = "Tesalvas"; showHide ();}
}
function jugadorAleatorio (){
    let jugador = prompt(`Escribe el nombre del jugador si este no debería salir: ${jugador1}, ${jugador2}, ${jugador3}, o ${jugador4}`);
    if(jugador == jugador1){jugador = 1}
    if(jugador == jugador2){jugador = 2}
    if(jugador == jugador3){jugador = 3}
    if(jugador == jugador4){jugador = 4}
    let numero = parseInt(Math.random() * 4 + 1);
    while(jugador == numero){numero = parseInt(Math.random() * 4 + 1);}
    if(numero == 1){alert(`El jugador generado es ${jugador1}`)}
    if(numero == 2){alert(`El jugador generado es ${jugador2}`)}
    if(numero == 3){alert(`El jugador generado es ${jugador3}`)}
    if(numero == 4){alert(`El jugador generado es ${jugador4}`)}
}
function objetoAleatorio (){
        let objeto = prompt(`Escribe "especial" si el objeto a generar es especial`);
        if(objeto == "especial"){
            let numero = parseInt(Math.random() * 2 + 1);
            if(numero == 1){texto = "CajaTeletransporte"; showHide (); texto2 = "CajaTeletransporteImg"; showHide2 ();}
            if(numero == 2){texto = "BillBala"; showHide (); texto2 = "BillBalaImg"; showHide2 ();}
        }
        else{
            let numero = parseInt(Math.random() * 5 + 1);
            if(numero == 1){texto = "Champinion"; showHide (); texto2 = "ChampinionImg"; showHide2 ();}
            if(numero == 2){texto = "ChampinionTurboDorado"; showHide (); texto2 = "ChampinionTurboDoradoImg"; showHide2 ();}
            if(numero == 3){texto = "Lakitu"; showHide (); texto2 = "LakituImg"; showHide2 ();}
            if(numero == 4){texto = "ChampinionMalvado"; showHide (); texto2 = "ChampinionMalvadoImg"; showHide2 ();}
            if(numero == 5){texto = "CopaDesafio"; showHide (); texto2 = "CopaDesafioImg"; showHide2 ();}
        }
    }

function showHide (){
    document.getElementById(`${texto}`).style.display = "block";
    setTimeout(function(){
        document.getElementById(`${texto}`).style.display = "none";
        }, 5000);
}
function showHide2 (){
    document.getElementById(`${texto2}`).style.display = "block";
    setTimeout(function(){
        document.getElementById(`${texto2}`).style.display = "none";
        }, 5000);
}