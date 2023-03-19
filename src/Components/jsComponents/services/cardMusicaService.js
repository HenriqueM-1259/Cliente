var responseReturn = ""
var Album = []
var searchInput = $("#searchInput")
var MusicaPlayer = $("#MusicaPlayer")

var musicaGetAll = function(idArtista){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:5144/api/musica/Search?searcTerms=${SearchTerms}&id=${idArtista}`, true);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status === 200) {
             
             responseReturn =  xhr.response.split("{");
             for (let i = 1; i < responseReturn.length; i++) {
                    var album = HelperConverterArtista(responseReturn[i])
                    Album.push(album)
                    resolve((Artista))
                }
            }
        }
        
    })
    
}

var musicaSearctTerms = function(SearchTerms,idArtista){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:5144/api/musica/Search?searchTerms=${SearchTerms}&idArtista=${idArtista}`, true);
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


function CarregaPaginaAlbum(idArtista){
    debugger
    cleanViewCard($("#CardHtmlComponents"))
    var t = musicaSearctTerms($("#searchInput").val(),idArtista).then(result => {
            debugger
        var card = new cardMusica(result,$("#CardHtmlComponents"))
        
    
    }).catch(erro => {
        throw new Error("NAo foi possivel pegar os artistas")
    })
}

function playMusica(id){
   debugger
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:5144/api/Musica/musica?id=${id}`, true);
        xhr.responseType = 'arraybuffer';
    
        xhr.send();
        xhr.onload = function() {
            if (xhr.status === 200) {
            var blob = new Blob([xhr.response], 
                {type: 'audio/mpeg'});
            var url = URL.createObjectURL(blob);
            var audio = new Audio(url);
            MusicaPlayer.attr('src', url)
            
            }
        };
    
}
