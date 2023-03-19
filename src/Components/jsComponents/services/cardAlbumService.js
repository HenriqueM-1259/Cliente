var responseReturn = ""
var Album = []
var searchInput = $("#searchInput")


var AlbumGetAll = function(idArtista){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:5144/api/album/Search?searcTerms=${SearchTerms}&id=${idArtista}`, true);
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

var albumSearctTerms = function(SearchTerms,idArtista){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:5144/api/album/Search?searchTerms=${SearchTerms}&idArtista=${idArtista}`, true);
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


