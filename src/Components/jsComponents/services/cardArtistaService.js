var responseReturn = ""
var Artista = []
var searchInput = $("#searchInput")
var ArtistaGetAll = function(){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:5144/api/artista`, true);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status === 200) {
             
             responseReturn =  xhr.response.split("{");
             for (let i = 1; i < responseReturn.length; i++) {
                    var art = HelperConverterArtista(responseReturn[i])
                    Artista.push(art)
                    resolve((Artista))
                }
            }
        }
        
    })
    
}

//search atualiza para pesquisar os artistas
$("#searchInput").keyup(function(){
        if($("#searchInput").val().length >= 1){
            cleanViewCard($("#CardHtmlComponents"))
                var t = ArtistaSearctTerms($("#searchInput").val()).then(result => {
            
                    var card = new CardArtista(result,$("#CardHtmlComponents"))
                    
                
                }).catch(erro => {
                    throw new Error("NAo foi possivel pegar os artistas")
                })
        }else {
            var t = ArtistaGetAll().then(result => {
       
                var card = new CardArtista(result,$("#CardHtmlComponents"))
                
               
              }).catch(erro => {
                throw new Error("NAo foi possivel pegar os artistas")
              })
        }
        
})

var ArtistaSearctTerms = function(SearchTerms){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:5144/api/Artista/Search?searcTerms=${SearchTerms}`, true);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status === 200) {
             
             responseReturn =  xhr.response.split("{");
             for (let i = 1; i < responseReturn.length; i++) {
                    var art = HelperConverterArtista(responseReturn[i])
                    Artista.push(art)
                    resolve((Artista))
                }
            }
        }
        
    })
    
}