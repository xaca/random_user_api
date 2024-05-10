class RenderUI{
    constructor(obj){
        this.gallery = obj.gallery;
    }
    renderData(obj){
        let user = obj.results[0];
        let contexto = this.contexto;
                
        this.renderCards(obj.results);
        
    }
    renderCards(obj){
        let cards = "";
        let data = obj;
        
        //console.dir(obj);return;

        for(let i = 0; i < data.length; i++){
            cards += this.renderCard(data[i]);
        }
        this.gallery.innerHTML = cards;
    }
    renderCard(obj){
        //Template literal cuando se usan las comillas francesas ``
        let user = obj;
        let card = `
        <section class="card">
            <div>
                <h3>${user.name.first} ${user.name.last}</h3>
                <span>${user.email}</span>
                <a href="#" class="btn">Ver más</a>
            </div>
            <div>
                <img src="${user.picture.thumbnail}" alt="">
            </div>
        </section>`;
        return card;
    }
}

export default RenderUI;