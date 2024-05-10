import Peticion from './xaca/Peticion.js';
import Paginator from './xaca/Paginator.js';
import RenderUI from './xaca/RenderUI.js';

window.onload = function(){
    let peticion = new Peticion();
    let paginator = new Paginator({
        contenedor: document.querySelector('.paginator')
    });
    let render = new RenderUI({
        gallery: document.querySelector('.gallery'),
        paginator: paginator
    });
    //render.renderData({"results":[{"gender":"male","name":{"title":"Mr","first":"Adalberto","last":"da Mota"},"location":{"street":{"number":5924,"name":"Rua Treze "},"city":"Corumbá","state":"Pernambuco","country":"Brazil","postcode":35594,"coordinates":{"latitude":"-76.0892","longitude":"-48.2325"},"timezone":{"offset":"+10:00","description":"Eastern Australia, Guam, Vladivostok"}},"email":"adalberto.damota@example.com","login":{"uuid":"04f9d494-d31c-4949-9d0c-4ae9e3841d11","username":"angryrabbit373","password":"stephane","salt":"2ofYLsLh","md5":"589febf762001884066e68358b459174","sha1":"d3e111b26cca847ed428d5cf4abca0ae0e2cc2c6","sha256":"c3c106a5dffe688b012ade39ba0d3821a4f129a42d908278e9f5707d4b13eaff"},"dob":{"date":"1982-06-15T22:04:51.959Z","age":41},"registered":{"date":"2020-07-18T10:20:00.309Z","age":3},"phone":"(81) 5308-0177","cell":"(68) 5344-3640","id":{"name":"CPF","value":"297.082.238-93"},"picture":{"large":"https://randomuser.me/api/portraits/men/60.jpg","medium":"https://randomuser.me/api/portraits/med/men/60.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/60.jpg"},"nat":"BR"}]});
    peticion.configurar({
        button: document.getElementById('btn_enviar'),
        render: render.renderData.bind(render)
    });
    //peticion.consultar();
}