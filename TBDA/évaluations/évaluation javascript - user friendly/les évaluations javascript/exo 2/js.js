// Exercice 2 : Table de multiplication
// Ecrivez une fonction qui affiche une table de multiplication.

// Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.

// Par exemple, TableMultiplication(7) doit afficher :

// 1 x 7 = 7

// 2 x 7 = 14

// 3 x 7 = 21 ...
//  declaration variable qui sera utilisée ensuite non nulle
var nombre=0;
//début de la boucle -- table de multiplication
// while(window.confirm("appuyer sur ok si vous voulez utiliser la fonction table de multiplication")==true)
// {
    // début de la fonction table de multiplication hein
    function tableMult()
    {
        // vide l'affichage de la précédente table de multiplication
        document.getElementById("affi").innerHTML = " "
        // déclaration des variables - demande le nombre qui sera affiché en table de multiplication
        var nombre = prompt(" entrez un nombre pour en afficher la table de multiplication");
        var i;
        var table;
        nombre = parseInt(nombre);
        //  SI LE NOMBRE N'EN EST PAS UN OU NULL OU ANNULER     
        if (isNaN(nombre)==true || nombre==null || nombre==undefined)
        {
            alert("entrez un nombre!");
            return false;
        }
        // LA BOUCLE QUI S'INCREMENTE ET CALCULE ET AFFICHE LA TABLE DE MULTIPLICATION.
        for (i=1; i<=10; i++)
        {
                table=i*nombre;
                document.getElementById("affi").innerHTML += i+" fois "+nombre+" = " +table+"<br>";
        }
    }
