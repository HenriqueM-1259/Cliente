var player = $("#pesquisa")
var MusicaPlayer = $("#MusicaPlayer")

var table = ""
var infoTable = ""
var infosSubTable = []

function GetAllMusica(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:5144/api/Musica/GetAllMusica?search=${player.val()}`, true);
    console.log()
    xhr.send();
    xhr.onload = function() {
        if (xhr.status === 200) {
            debugger
            table += `
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#Id</th>
                <th scope="col">Title</th>
                <th scope="col">Player</th>
              </tr>
            </thead>
            <tbody>
            `
            infoTable = xhr.response.split("}");
            for (let index = 0; index < infoTable.length; index++) {
                infosSubTable[index] = infoTable[index].split("\"");
                if(infosSubTable[index][16] != undefined){
                    var t = infosSubTable[index][2].split(":")
                    t = t[1]
                }
                
                table += `
                <tr>
                <th scope="row">${t}</th>
                <td>${infosSubTable[index][5]}</td>
                <td><button onclick="pesquisar(${t})">Play</button></td>
                </tr>
                `
            }
            table += `</tbody>`
            document.getElementById("myTable").innerHTML = table
            console.log(infosSubTable)
            
        }
    } 
        
};





function pesquisar(id){

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
        audio.play();
        }
        };
}
