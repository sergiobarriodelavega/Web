document.body.style.visibility = "hidden";
if (confirm("Esta página contiene cambios de luces rapidos. Si sufres de epilepsia no continues. ¿Desesas continuar?")) {
  document.body.style.visibility = "visible";
  var temporizador = setInterval(color, 0);
  var barra = document.getElementById("barraHSL");
  var valorHSL = 0;
  
  function color(){
    valorHSL+=parseInt(barra.value);
    if (valorHSL> 360){
      valorHSL =0;
    }
    document.body.style.backgroundColor = "hsl("+valorHSL+", 100%, 50%)";
  }
}