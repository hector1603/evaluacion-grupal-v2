
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

recuperarTextoDiv = function(idComponente) {
    let cmpDiv;
    cmpDiv = document.getElementById(idComponente).textContent;
    return cmpDiv;
}

recuperarIntDiv = function(idComponente) {
    let valorDiv = recuperarTextoDiv(idComponente);
    let valorInt = parseInt(valorDiv);
    return valorInt;
}

recuperarFloatDiv = function(idComponente) {
    let valorDiv = recuperarTextoDiv(idComponente);
    let valorFlotante = parseFloat(valorDiv);
    return valorFlotante;
}

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}


esDigito = function(caracter) {
    let digito = false;
    let ascii = caracter.charCodeAt(0);
    if(ascii > 47 && ascii < 58 ) {
        digito = true;
    } else {
        digito = false;
    }
    return digito
}

esMayuscula = function(caracter) {
    let mayuscula = false;
    let ascii = caracter.charCodeAt(0);
    if(ascii > 64 && ascii < 91) {
        mayuscula = true;
    } else {
        mayuscula = false;
    }
    return mayuscula;
}

esFlotante = function(valor) {
    let flotante = false;
    let numero = parseFloat(valor);

    if(!isNaN(numero)) {
        flotante = true
    } 
    return flotante;
}
