import Peticion from './xaca/Peticion.js';
import Paginator from './xaca/Paginator.js';
import RenderUI from './xaca/RenderUI.js';

window.onload = function(){
    let peticion = new Peticion();
    let render = new RenderUI({
        gallery: document.getElementById('gallery')
    });
    peticion.configurar({
        button: document.getElementById('btn_enviar'),
        render: render.renderData.bind(render)
    });
    //peticion.consultar();
}