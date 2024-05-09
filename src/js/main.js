import Peticion from './xaca/Peticion.js';

window.onload = function(){
    let peticion = new Peticion();
    peticion.configurar({
        button: document.getElementById('btn_enviar')
    });
    //peticion.consultar();
}