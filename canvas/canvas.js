const texto = document.getElementById("textoLineas");
const boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

const d = document.getElementById("dibujito");
const ancho = d.width;
const lienzo = d.getContext("2d");
const colorPink = '#FAA';
const colorBlue = '#021fff';
/* for(l = 0; l < lineas; l++) 
{
  yI = 10 * l;
  xF = 10 * (l + 1);
  dibujarLinea(colorLineas, 0, yI, xF, 300);
}
 */
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) 
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() 
{
  const lineas = parseInt(texto.value);
  let l = 0;
  let yI, xF;
  let xI, yF;
  
  const espacio = ancho / lineas;

  while(l < lineas) 
  {
    yI = espacio * l;
    xF = espacio * (l + 1);
    xI = espacio * l;
    yF = espacio * (l + 1);
    dibujarLinea(colorPink, 0, yI, xF, ancho);
    dibujarLinea(colorBlue, xI, 0, ancho, yF);
    l++;
  }
  dibujarLinea(colorPink, 1, 1, 1, 299);
  dibujarLinea(colorPink, 1, 299, 299, 299);
  dibujarLinea(colorBlue, 1, 1, 299, 1);
  dibujarLinea(colorBlue, 299, 1, 299, 299);
}