var usuario = prompt("¿Cual es tu peso?");
var planeta = parseInt(prompt("Elige tu planeta:\n 1 es Marte\n 2 es Jupiter"));
var peso = parseInt(usuario);
var gTierra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;
var pesoFinal;
var nombrePlaneta = planeta
/* pesoFinal = peso * gMarte / gTierra; */
if (planeta == 1) 
{
  pesoFinal = peso * gMarte / gTierra;
  nombrePlaneta = "Marte";
} 
else if (planeta == 2) 
{
  pesoFinal = peso * gJupiter / gTierra;
  nombrePlaneta = "Jupiter";
} 
else 
{
  pesoFinal = 1000000;
  nombrePlaneta = "Crypton";
}
pesoFinal = parseInt(pesoFinal);
document.write(`Tu peso en ${nombrePlaneta} es de: <strong>${pesoFinal} kilos</strong>`);