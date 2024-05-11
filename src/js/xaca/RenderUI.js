import Paginator from "./Paginator";

class RenderUI{
    constructor(obj){
        this.gallery = obj.gallery;
        this.paginator = obj.paginator;
        document.addEventListener(Paginator.RENDER_UPDATE,this.renderUpdate.bind(this));
    }
    renderUpdate(event){
        this.renderCards(event.detail);
    }
    renderData(obj){
        if(!this.paginator.isready)
        {
            this.paginator.data = obj.results;
            this.paginator.createPagination();
        }
        this.renderCards(obj.results);
    }
    renderCards(obj){
        let cards = "";
        let data = obj;
        
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