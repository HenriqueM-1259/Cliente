var responseReturn = ""
var Artista = []
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


