const inputEntrada= document.querySelector(".entrada");
const inputSalida= document.querySelector(".salida");
function encriptar(stringEncriptado){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0;i < matriz.length;i++){
        if(stringEncriptado.includes(matriz[i][0])){
            stringEncriptado= stringEncriptado.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return stringEncriptado;
}
function desEncriptar(stringEncriptado){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0;i < matriz.length;i++){
        if(stringEncriptado.includes(matriz[i][1])){
            stringEncriptado= stringEncriptado.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return stringEncriptado;
}
function btnCopiar(){
    inputSalida.select();
    document.execCommand('copy');
    
}
function btnEncriptar(){
    const textoEncriptado = encriptar(inputEntrada.value);
    inputSalida.value=textoEncriptado;
    const mensaje=document.querySelector(".mensajeTemporal");
    if(inputSalida.value){
        mensaje.style.display="none"
        inputSalida.style.backgroundImage="none"
    }
}
function btnDesencriptar(){
    const textoEncriptado = desEncriptar(inputEntrada.value);
    inputSalida.value=textoEncriptado;
    const mensaje=document.querySelector(".mensajeTemporal");
    if(inputSalida.value){
        mensaje.style.display="none"
        inputSalida.style.backgroundImage="none"
    }
}