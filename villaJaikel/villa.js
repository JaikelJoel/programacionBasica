 const villa = document.getElementById("villaJaikel");
 const papel = villa.getContext("2d");
 //let z;
 
 const fondo = {
   url: "../tile.png",
   cargaOK: false
 };
 const vaca = {
   url: "../vaca.png",
   cargaOK: false
 };
 const pollo = {
   url: "../pollo.png",
   cargaOK: false
 };
 const cerdo = {
   url: "../cerdo.png",
   cargaOK: false
 };
 let cantidad = aleatorio(5, 10);

 fondo.imagen = new Image();
 fondo.imagen.src = fondo.url;
 fondo.imagen.addEventListener("load", cargarFondo);

 vaca.imagen = new Image();
 vaca.imagen.src = vaca.url;
 vaca.imagen.addEventListener("load", cargarVacas);

 pollo.imagen = new Image();
 pollo.imagen.src = "../pollo.png";
 pollo.imagen.addEventListener("load", cargarPollos);

 cerdo.imagen = new Image();
 cerdo.imagen.src = "../cerdo.png";
 cerdo.imagen.addEventListener("load", cargarCerdos);
 
 function cargarFondo()
 {
   fondo.cargarOK = true;
   dibujar();
 }
 function cargarVacas()
 {
   vaca.cargarOK = true;
   dibujar();
 }
 function cargarPollos()
 {
   pollo.cargarOK = true;
   dibujar();
 }
 function cargarCerdos()
 {
   cerdo.cargarOK = true;
   dibujar();
 }

 function dibujar()
{
  if(fondo.cargarOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargarOK)
  {
    console.log(cantidad);
    for(let v=0; v < cantidad; v++)
    {
      let x = aleatorio(0, 5);
      let y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
   
  }
  if(pollo.cargarOK)
  {
    for(let p=0; p < cantidad; p++)
    {
      let x = aleatorio(0, 5);
      let y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(cerdo.cargarOK)
  {
    for(let c=0; c < cantidad; c++)
    {
      let x = aleatorio(0, 5);
      let y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}
/*  function dibujarVacas()
{
  papel.drawImage(vaca, 10, 10);
}
 function dibujarPollos()
{
  papel.drawImage(pollo, 300, 150);
}
 function dibujarCerdos()
{
  papel.drawImage(cerdo, 10, 300);
} */
/* for(let i=0; i<10; i++)
{
  z = aleatorio(10, 20);
  document.write(`${z}, `);

} */
 
function aleatorio(min, maxi)
{
  let resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}