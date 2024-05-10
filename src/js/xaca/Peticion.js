class Peticion{
    constructor(obj){
        //this.url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
        this.url = "https://randomuser.me/api/?results=10";
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
            //ref.render(data);
            this.data = data;
            this.pintarDatos(ref,data);
            //this.debug(data);
        }).bind(this,ref));   
    }
    pintarDatos(ref,data){
        //console.log(data,ref);
        ref.render(data);
    }
    debug(response){
        //alert(response.results[0].name.first + " " + response.results[0].name.last);
        //console.log(response);return;
        for(let i = 0; i < response.results.length; i++){
            console.log(response.results[i].name.first + " " + response.results[i].name.last);
        }
    }
}

export default Peticion;