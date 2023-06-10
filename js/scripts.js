function criarHeading(){
    var heading = document.createElement("h1");
    var heading_text = document.createTextNode("Big Head!");

    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}

var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqpg1AzOrhIQpX9yBJhHDDsjTY53pFo70rA&usqp=CAU",]

var index = 0; 

window.onload = function(){
    var header = document.createElement("header");

    var button = document.createElement("button");
    var button_text = document.createTextNode("Adicionar Imagens");
    button.addEventListener("click", addImage);

    button.appendChild(button_text);
    header.appendChild(button);

    var section = document.createElement("section");
    section.setAttribute("id","imagens");
    
    document.body.appendChild(header);
    document.body.appendChild(section);

}

function addImage(){
    console.log("Adicionando imagem ao Painel");

    var img = document.createElement("img");
    img.setAttribute("id", "imagem");
    img.setAttribute("src", images[index]);
    img.setAttribute("width", "250px");
    img.setAttribute("height", "250px");

    var section = document.getElementById("Imagens");
    section.appendChild(img);


    var button = document.createElement("button");
    var button_text = document.createTextNode("Alterar Imagem");
    
    button.appendChild(button_text);
    button.addEventListener("click", changeImage);
    section.appendChild(button);

}

function changeImage(){

    if(index == 2){
        index = 0
    } else {
        index++;
    }

    var img = document.getElementById("imagem");
    img.setAttribute("src", images[index]);
}

