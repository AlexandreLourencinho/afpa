// var prenom = null;
// var i = 1;
// for (i=0; prenom!=null; i++)
// {
//  prenom = window.prompt("prénom numéro :"+i);
// }
// alert("vous avez rentré "+i+"prénom(s)")

// do {
//     prenom = prompt(i+" prénom?");
//     if (prenom != null)
//     {
//         i++;
//     }
//     console.log(prenom)
// } while (prenom!=null);
// alert(i+"prenom")
// console.log(i+" prénoms")

// while (prenom!=null)
// {
//     prenom=prompt(1+" prenom?");
//     if (prenom!=null)
//     {
//         i++;
//     }
//     console.log(prenom);
// }
// console.log(i);
// -------------------------------------------------------
// prénoms
var prenom = null;
var i = 1;
while(prenom!= "")
{
    prenom=prompt(i+" prénom?");
    if ( prenom== "")
    {
        break;
    }
    else
    {
        i++;
        console.log(prenom);
    }
}
console.log(i-1 +" prénoms")
// ----------------------------------------------------------
// laurent version
// var compteur = 0;
//     var prenom = null;
//     var liste = "";

//     while (prenom != "") 
//     {
//        prenom = prompt("Entrer un prénom");
//        liste += prenom + " ";
//        compteur++;
//     }

//     console.log("Liste des prénoms saisis : "+liste);
//     console.log("Nombre de prénoms saisis : "+compteur);
