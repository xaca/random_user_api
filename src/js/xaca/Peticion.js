class Peticion{
    constructor(obj){
        //this.url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
        this.url = "https://randomuser.me/api/?results=10";
        //this.configurar(obj);
    }
    configurar(obj){
        //console.log(obj.button);return;
        this.boton = obj.button;
        this.boton.addEventListener('click', this.consultar.bind(this,obj));
    }
    consultar(obj){
        //fetch es una peticon asincrona
        //then es una funcion que procesara la respuesta
        fetch(this.url)//Envia la peticion y espera respuesta
        .then(response => response.json())//Respuesta en formato json
        .then(data => obj.render(data));//Respuesta impresa
    }
    imprimir(response){
        //alert(response.results[0].name.first + " " + response.results[0].name.last);
        for(let i = 0; i < response.results.length; i++){
            console.log(response.results[i].name.first + " " + response.results[i].name.last);
        }
    }
}

export default Peticion;