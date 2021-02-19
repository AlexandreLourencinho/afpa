var nombre=prompt("entrez l'age de la personne")
nombre=parseInt(nombre)
var vieux=0
var jeune=0
var moyen=0
while(nombre<100){
    var nombre=prompt("entrez l'age de la personne")
if (nombre<20 && nombre>0)
{
jeune++
}
else if (nombre>40)
{
    vieux++
}
else if(nombre>=20 && nombre<=40)
{
    moyen++
}
else if (nombre<0)
{
    alert("un âge n'est jamais négatif!")
}
}
document.write("il y a "+jeune+" personnes de moins de 20 ans \n"+"<br>"+ " il y a "+moyen+" personnes de 20 a 40 ans"+"<br>"+"il y a "+vieux+" personnes de plus de 40 ans")