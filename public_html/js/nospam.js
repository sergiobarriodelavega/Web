//Hecho por Sergio B, para eliminar la publicidad de 000WebHostApp
document.body.onload = function() {
    var divs = document.getElementsByTagName("div");
    let longitud = divs.length;
    for (let i = longitud - 1; i > -1; i--) {
        let elemento = divs[i];
        if (elemento.innerHTML.match(".*Hosted on free web hosting 000webhost.com.*")) {
            document.body.removeChild(elemento);
            break;
        }
    }
};