
//Variables para el caso
let boton = document.getElementById('calcular');

// boton del evento
boton.addEventListener('click', () => {
    //Declaro las variables en este "ambito" para que solo puedan acceder desde este mismo scope y no global
    //como var, entre otras cosas mas.

    let nCuotas = parseInt(document.getElementById('numero').value);
    let vCuotas = parseInt(document.getElementById('valor').value);
    let mPrestado = parseInt(document.getElementById('monto').value);
    let iTotal = document.getElementById('interes');

    //La función TASA pide el valor de la cuota negativo, pero la formula que encontre pide en positivo, por eso
    //valido si el numero es negativo saco su valor absoluto a positivo
    if(Math.sign(vCuotas) === -1){
        vCuotas = Math.abs(vCuotas);
    }

    //Rodendeo al entero más cercano Template literals de ES6
    let interes = Math.round(Tasa(vCuotas, nCuotas, mPrestado));
    //Muestro el input el valor en porcentaje usando 
    iTotal.value = `${interes}%`;
})

//Validación para que los input solo acepten numeros
function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te)
}

//Función TASA
function Tasa(n,cuota,monto){
    let total = cuota / monto * n;
    return total;
}