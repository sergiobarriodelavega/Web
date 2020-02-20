var indice = document.getElementById("contenidoIndice");
var mostrado = false;
var h2 = document.getElementsByTagName("h2");
var hrIndice = document.createElement("hr");
var icono = document.getElementById("mostrarIndiceIcono");

//Detecta si su padre es section
for (let i = 0; i < h2.length; i++) {
    const element = h2[i];
    if (element.parentElement.nodeName == "SECTION") {
        let elemIndice = document.createElement("a");
        elemIndice.innerText = element.innerText;
        elemIndice.setAttribute("indiceValor", i);
        elemIndice.setAttribute("indiceTipo", element.nodeName);
        elemIndice.setAttribute("onClick", "scrollIndice(event)");
        indice.appendChild(elemIndice);
    }
}

function scrollIndice(e) {
    let indice = e.srcElement.getAttribute("indiceValor");
    let tipo = e.srcElement.getAttribute("indiceTipo");
    document.getElementsByTagName(tipo)[indice].scrollIntoView();
}

function mostrarIndice() {
    if (mostrado) { //Esconder
        indice.style.height = 0;
        indice.style.opacity = 0;
        indice.style.visibility = "hidden";
        icono.setAttribute("class", "fa fa-plus-square");
    } else {    //Mostrar
        indice.style.height = "auto";
        indice.style.visibility = "visible"
        indice.style.opacity = 1;
        icono.setAttribute("class", "fa fa-minus-square");
    }
    mostrado = !mostrado;
}

hrIndice.setAttribute("id","hrIndice");
indice.parentNode.appendChild(hrIndice);
