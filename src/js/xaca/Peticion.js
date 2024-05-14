class Peticion{
    static REQUEST_COMPLETE = "request_complete";
    constructor(obj){
        //this.url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
        this.url = "https://randomuser.me/api/?results=200";
        //this.configurar(obj);
    }
    configurar(obj){
        this.boton = obj.button;
        this.boton.addEventListener('click', this.consultar.bind(this,obj));
    }
    consultar(ref){
        //fetch es una peticon asincrona
        //then es una funcion que procesara la respuesta
        fetch(this.url)//Envia la peticion y espera respuesta
        .then(response=>response.json())//Respuesta en formato json
        .then(((ref,data)=>{
            const event = new CustomEvent(Peticion.REQUEST_COMPLETE, { detail: data });
            document.dispatchEvent(event);
        }).bind(this,ref));
    }
}

export default Peticion;