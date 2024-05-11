class Modelo{
    constructor(){
        this.datos = [];
    }
    agregarUsuario(obj){
        this.datos.push(obj);
    }
    formatearData(data){
        let datos = data.results;
        for(let i = 0; i < datos.length; i++){
            let user = new User({
                name: datos[i].name.first,
                lastname: datos[i].name.last,
                email: datos[i].email,
                picture: datos[i].picture,
                cellphone: datos[i].cell
            });
            this.agregarUsuario(user);
        }
    }
}