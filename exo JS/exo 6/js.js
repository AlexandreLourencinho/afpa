var nombre = null;
var moy = null;
var somme = null;
var i = 0;
while ( nombre != 0)
{
    nombre=prompt("entrez un nombre");
    nombre=parseInt(nombre)
    somme+=nombre;
    i++;
    moy = somme/(i-1);
}
console.log("somme = "+somme+"\n moyenne ="+moy)