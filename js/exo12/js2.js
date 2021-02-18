var tablo =[];
var nombre=prompt("entrez la taille de votre tableau");
var nb
var i=0
for (i=0; i<nombre; i++)
{ 
    nb=prompt("entrez vos valeurs")
    tablo.push(nb)

}
if (tablo.length>0)
{
    alert(tablo)
}
else
{
    alert("vous n'avez rien rentré comme valeur.")
}
console.log(tablo)
console.table(tablo)