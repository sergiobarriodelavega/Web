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


//Pruebas
/*
document.body.onload = function () {
  eliminarSpam(document.body);
}
function eliminarSpam(bodyHTML) {
  let divs = bodyHTML.getElementsByTagName("div");
  let longitud = divs.length;
  let iframes = bodyHTML.getElementsByTagName("iframe");
  let cantidadIframes = iframes.length;

  for (let i = longitud - 1; i > -1; i--) {
    let elemento = divs[i];
    if (elemento.innerHTML.match(".*Hosted on free web hosting 000webhost.com.*")) {
      document.body.removeChild(elemento);
      console.log("Contenedor eliminado");
      
      break;
    }
  }
  
  for (let j = 0; j < cantidadIframes; j++) {
    let iframe = iframes[j];
    console.log(iframe);
    
    console.log("Iframe " + j);
    eliminarSpam(iframe.ownerDocument.body);
  }
}*/


