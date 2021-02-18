var nombre1 = prompt("entrez votre premier chiffre")
var nombre2 = prompt("entrez votre deuxième chiffre")
var i
var table
nombre1 = parseInt(nombre1)
nombre2 = parseInt(nombre2)
for (i=1; i<=nombre1; i++)
{
    table=i*nombre2
    console.log(i+" fois "+nombre2+" = " +table)
    document.write(i+ " fois " + nombre2+ " = " + table +"<br> ")
}
console.table(table)