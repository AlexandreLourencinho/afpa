var nombre
function tableMult(nombre)
{
    nombre = prompt("entrez votre chiffre")
    var i
    var table
    nombre = parseInt(nombre)
    for (i=1; i<=10; i++)
        {
            table=i*nombre
            document.write(i+" fois "+nombre+" = " +table+"<br>")
        }
    document.write("<br>")
}
tableMult(nombre)
while(window.confirm("voulez vous rentrer un autre nombre?")==true)
{
    tableMult(nombre)
}