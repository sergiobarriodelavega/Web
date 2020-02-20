var boton = document.getElementById("modBoton");
var slider = document.getElementById("modSlider");
var sliderR = document.getElementById("modSliderR");
var sliderG = document.getElementById("modSliderG");
var sliderB = document.getElementById("modSliderB");
var sliderTamañoLetra = document.getElementById("modSliderTamañoLetra");
var tamañoLetra = 20;
//var cambios = document.getElementById("modCambios");
var random = document.getElementById("modRandom");
var rojo = 0;
var azul = 0;
var verde = 0;

slider.oninput = function () {
    boton.style.borderWidth = slider.value + "px";
};

sliderR.oninput = function () {
    rojo = sliderR.value;
    aplicarColor();
};

sliderG.oninput = function () {
    verde = sliderG.value;
    aplicarColor();
};

sliderB.oninput = function () {
    azul = sliderB.value;
    aplicarColor();
};

sliderTamañoLetra.oninput = function () {
    boton.style.fontSize = sliderTamañoLetra.value + "px";
};

random.onclick = function () {
    rojo = colorAleatorio();
    verde = colorAleatorio();
    azul = colorAleatorio();
    aplicarColor();
    sincronizarSliders();
};

function aplicarColor() {
    boton.style.borderColor = "rgb(" + rojo + "," + verde + "," + azul + ")";
}

function sincronizarSliders() {
    sliderR.value = rojo;
    sliderG.value = verde;
    sliderB.value = azul;
}

function colorAleatorio() {
    return Math.random() * (256 - 0);
}

boton.onclick = function(){
    window.open('arcoiris.html');
}
