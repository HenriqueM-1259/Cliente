class cardAlbum{
    constructor(listaCard,Root){
        this.listaCard = listaCard
        this.card = ``
        this.Root = Root
        this.Create()
    }

    Create(){
        for (let i = 0; i < this.listaCard.length; i++) {
           console.log(this.listaCard[i])
            this.card += `
        <div class="card text-center mt-4" style="width: 16rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${this.listaCard[i].nome}</h5>
        <a href="#" onclick="CarregaPaginaAlbum(${this.listaCard[i].id})" class="btn btn-primary">Ouvir o Album?</a>
        </div>
        </div>
       `
            
        }
       
        this.Root.html(this.card)
        console.log(this.Root)
    }
}