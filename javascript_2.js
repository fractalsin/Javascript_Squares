function createContent() {
    let paragraph = document.createElement("p");
    let content = document.createTextNode("Extra Content Added ");
    paragraph.appendChild(content);
    document.getElementById("magicDiv_4").appendChild(paragraph);
}
/* magicDiv_9 */
var div = document.getElementById("magicDiv_9");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
  div.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,1000);
