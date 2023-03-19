function HelperConverterArtista(artista){
    var art = ""
    var id = ""
    var nome = ""
    var ArtistaReturn =  {}
    art = artista.split(",")

    id = converterObjeto(art[0])
    nome = converterObjeto(art[1])
    ArtistaReturn =  {
        id:id,
        nome:nome
    }
    return ArtistaReturn;
}

function converterObjeto(obj){
    obj = obj.split(":")
    obj = obj[1]
    return obj;
}

function cleanViewCard(Object){
    Object.empty()
    Artista = []
}