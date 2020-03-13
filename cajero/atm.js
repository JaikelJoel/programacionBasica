class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

const entregarDinero = () => 
{
  for(let bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      console.log(div);
    }
  }
} 

let caja = [];
let entregado = [];
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 2) );

let dinero = 210;
let div = 0;
let papeles = 0;

const boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero)