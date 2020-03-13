let imagenes = [];
imagenes["Cauchin"] = "./vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinacho"] = "cerdo.png";
/* let imagenes = {
  Cauchin: "../vaca.png",
  Pokacho: "../pollo.png",
  Tocinacho: "../cerdo.png"
} */
let = coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinacho", 120, 35));

for(let pakin of coleccion)
{
  pakin.mostrar();
}