var nombre=0;
while(window.confirm("voulez vous rentrer un nombre?")==true){
    function tableMult(nombre)
    {
        nombre = prompt("entrez votre chiffre");
        var i;
        var table;
        nombre = parseInt(nombre);
        if (isNaN(nombre)==true || nombre==null || nombre==undefined)
        {
            alert("entrez un nombre!");
            return false;
        }
        for (i=1; i<=10; i++)
        {
                table=i*nombre;
                document.write(i+" fois "+nombre+" = " +table+"<br>");
        }
        document.write("<br>")
    }
    tableMult(nombre)
}